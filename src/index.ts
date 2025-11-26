import { EmailMessage } from "./types/EmailMessage";
import { TimeInterval } from "./types/TimeInterval";
import { CalendarEvent } from "./types/CalendarEvent";
import { calendarEvents } from "./calendarEvents";
import { openai } from "./clients/openai";
import {
  MeetingProposal,
  meetingProposalResponseFormat,
} from "./types/MeetingProposal";
import {
  addMinutes,
  subMinutes,
  startOfDay,
  addDays,
  parseISO,
  differenceInDays,
  differenceInHours,
  format,
  areIntervalsOverlapping,
  isValid,
  addHours,
} from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { UserPreferences } from "./types/UserPreferences";
import { defaultUserPreferences } from "./userSettings";

const USER_EMAIL = "matt.ffrench@fyxer.com";

const extractMeetingProposal = async (
  emailMessage: EmailMessage
): Promise<MeetingProposal> => {
  const systemPrompt = `Extract meeting scheduling information from emails.

Rules:
1. Categorize proposed times and store in appropriate fields:
   - specific_datetime: exact date and time
     → Example: "Wednesday at 4pm" → datetime: "Wednesday at 4pm", dayOfWeek: "Wednesday"
   - day_time_range: day with time range
     → Example: "Wed afternoon" → datetime: "Wednesday afternoon", dayOfWeek: "Wednesday"
   - day_only: relative date references or single day names
     → Example: "next week" → datetime: "next week", dayOfWeek: null
     → Example: "Monday" → datetime: "Monday", dayOfWeek: "Monday"
   - vague: unclear timing
     → Example: "sometime soon" → datetime: "soon", type: "vague"

   CRITICAL: Always put the natural language date reference in the 'datetime' field first!
   Use 'dayOfWeek' ONLY for specific day names like "Monday", "Tuesday", etc.

2. Extract timezone from explicit mentions (PST, EST) or location hints ("based in San Francisco")

3. Duration inference:
   - explicit: clearly stated (e.g., "30 minutes", "an hour")
   - inferred: guess from meeting type (e.g., "quick catchup" → 30min, "board meeting" → 60min)
   - unknown: no clues

4. Detect constraints: "afternoon" → mustBeAfternoon, "morning" → mustBeMorning

Current date: ${new Date().toISOString()}`;

  const userPrompt = `Email Subject: ${emailMessage.subject}
Email Body: ${emailMessage.fullBody}
From: ${emailMessage.from.name || emailMessage.from.address}

Extract the meeting proposal information.`;

  // changed from the Responses API to Chat Completions API for structured outputs compatibility
  const response = await openai.chat.completions.parse({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    response_format: meetingProposalResponseFormat,
  });

  if (!response.choices[0].message.parsed) {
    throw new Error("Failed to parse meeting proposal");
  }

  return response.choices[0].message.parsed;
};

const getBusyIntervals = (
  events: CalendarEvent[],
  userEmail: string,
  start: Date,
  end: Date,
  bufferMinutes: number,
  allowBackToBack: boolean
): TimeInterval[] => {
  const busyIntervals: TimeInterval[] = [];
  const effectiveBuffer = allowBackToBack ? 0 : bufferMinutes;

  for (const event of events) {
    const eventStart = new Date(event.startsAt);
    const eventEnd = new Date(event.endsAt);

    if (eventEnd < start || eventStart > end) continue;

    if (event.isAllDay) {
      const dayStart = startOfDay(eventStart);
      busyIntervals.push({
        startsAt: new Date(dayStart.getTime() + 9 * 60 * 60 * 1000),
        endsAt: new Date(dayStart.getTime() + 17 * 60 * 60 * 1000),
      });
      continue;
    }

    const userInvitee = event.invitees.find((inv) => inv.emailAddress === userEmail);
    const isOrganiser = event.organiser.emailAddress === userEmail;

    let isBusy = false;
    if (isOrganiser) {
      isBusy = true;
    } else if (userInvitee) {
      const decision = userInvitee.attendanceDecision;
      isBusy = decision === "ACCEPTED" || decision === "TENTATIVE";
    }

    if (isBusy) {
      busyIntervals.push({
        startsAt: subMinutes(eventStart, effectiveBuffer),
        endsAt: addMinutes(eventEnd, effectiveBuffer),
      });
    }
  }

  return busyIntervals;
};

const mergeOverlappingIntervals = (intervals: TimeInterval[]): TimeInterval[] => {
  if (intervals.length === 0) return [];

  const sorted = [...intervals].sort(
    (a, b) => a.startsAt.getTime() - b.startsAt.getTime()
  );

  const merged: TimeInterval[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];

    if (current.startsAt <= last.endsAt) {
      last.endsAt = new Date(Math.max(last.endsAt.getTime(), current.endsAt.getTime()));
    } else {
      merged.push(current);
    }
  }

  return merged;
};

const findFreeSlots = (
  busyIntervals: TimeInterval[],
  duration: number,
  start: Date,
  end: Date,
  userPreferences: UserPreferences
): TimeInterval[] => {
  const freeSlots: TimeInterval[] = [];
  const slotIncrementMinutes = 15;

  const merged = mergeOverlappingIntervals(busyIntervals);

  let currentTime = new Date(start);

  for (let day = new Date(start); day < end; day = addDays(day, 1)) {
    const dayInZone = toZonedTime(day, userPreferences.timezone);
    const dayOfWeek = dayInZone.getDay(); // 0-6

    // Adjust 0 (Sunday) to 7 if needed, or just match user's convention.
    // User's example: workDays: [1, 2, 3, 4, 5] (Mon-Fri).
    // JS getDay(): 0=Sun, 1=Mon...
    // So we check if dayOfWeek is in workDays.
    if (!userPreferences.workDays.includes(dayOfWeek)) continue;

    const dayStr = format(dayInZone, 'yyyy-MM-dd');
    const workStartISO = `${dayStr}T${userPreferences.workHoursStart}:00`;
    const workEndISO = `${dayStr}T${userPreferences.workHoursEnd}:00`;

    const workStartUTC = fromZonedTime(workStartISO, userPreferences.timezone);
    const workEndUTC = fromZonedTime(workEndISO, userPreferences.timezone);

    // Ensure we don't start before the search start time
    currentTime = workStartUTC < start ? start : workStartUTC;

    // Align to 15 min grid if needed, but let's just start from currentTime

    while (currentTime < workEndUTC) {
      const slotEnd = addMinutes(currentTime, duration);

      if (slotEnd > workEndUTC) break;

      const isOverlapping = merged.some((busy) =>
        areIntervalsOverlapping(
          { start: currentTime, end: slotEnd },
          { start: busy.startsAt, end: busy.endsAt }
        )
      );

      if (!isOverlapping) {
        freeSlots.push({ startsAt: new Date(currentTime), endsAt: new Date(slotEnd) });
      }

      currentTime = addMinutes(currentTime, slotIncrementMinutes);
    }
  }

  return freeSlots;
};

const scoreAndSelectSlots = (
  freeSlots: TimeInterval[],
  proposal: MeetingProposal,
  count: number
): TimeInterval[] => {
  const scoredSlots = freeSlots.map((slot) => ({
    slot,
    score: scoreSlot(slot, proposal),
  }));

  scoredSlots.sort((a, b) => b.score - a.score);

  const selectedSlots: TimeInterval[] = [];
  const usedDays = new Set<string>();

  for (const { slot } of scoredSlots) {
    if (selectedSlots.length >= count) break;

    const dayKey = format(slot.startsAt, "yyyy-MM-dd");

    if (!usedDays.has(dayKey) || selectedSlots.length === 0) {
      selectedSlots.push(slot);
      usedDays.add(dayKey);
    }
  }

  if (selectedSlots.length < count) {
    for (const { slot } of scoredSlots) {
      if (selectedSlots.length >= count) break;

      if (!selectedSlots.some((s) => s.startsAt.getTime() === slot.startsAt.getTime())) {
        selectedSlots.push(slot);
      }
    }
  }

  return selectedSlots;
};

const scoreSlot = (slot: TimeInterval, proposal: MeetingProposal): number => {
  let score = 100;

  const slotHour = slot.startsAt.getUTCHours();
  const slotDay = slot.startsAt.getUTCDay();

  if (slotHour >= 10 && slotHour < 16) {
    score += 20;
  } else if (slotHour >= 9 && slotHour < 17) {
    score += 10;
  }

  if (slotDay === 0 || slotDay === 6) {
    score -= 50;
  }

  if (proposal.constraints.mustBeAfternoon && slotHour >= 12) {
    score += 30;
  } else if (proposal.constraints.mustBeAfternoon && slotHour < 12) {
    score -= 40;
  }

  if (proposal.constraints.mustBeMorning && slotHour < 12) {
    score += 30;
  } else if (proposal.constraints.mustBeMorning && slotHour >= 12) {
    score -= 40;
  }

  for (const proposedTime of proposal.proposedTimes) {
    if (proposedTime.type === "specific_datetime" && proposedTime.datetime) {
      try {
        const proposedDate = parseISO(proposedTime.datetime);
        const hoursDiff = Math.abs(differenceInHours(slot.startsAt, proposedDate));
        if (hoursDiff <= 2) score += 50;
      } catch { }
    }
    if (proposedTime.dayOfWeek) {
      const slotDayName = format(slot.startsAt, "EEEE");
      if (slotDayName.toLowerCase() === proposedTime.dayOfWeek.toLowerCase()) {
        score += 30;
      }
    }
  }

  if (proposal.urgency === "immediate") {
    const daysFromNow = differenceInDays(slot.startsAt, new Date());
    if (daysFromNow <= 1) score += 40;
  }

  if (slotHour >= 16) score -= 10;
  if (slotHour < 9) score -= 20;

  return score;
};

const inferDuration = (proposal: MeetingProposal, defaultDuration: number): number => {
  if (proposal.duration.confidence === "explicit" && proposal.duration.minutes) {
    return proposal.duration.minutes;
  }

  if (proposal.duration.confidence === "inferred" && proposal.duration.minutes) {
    return proposal.duration.minutes;
  }

  const meetingType = proposal.meetingType?.toLowerCase() || "";
  if (meetingType.includes("quick") || meetingType.includes("catchup")) {
    return 30;
  }
  if (meetingType.includes("board") || meetingType.includes("planning")) {
    return 60;
  }
  if (meetingType.includes("1:1") || meetingType.includes("one-on-one")) {
    return 30;
  }

  return defaultDuration;
};

const determineSearchRange = (proposal: MeetingProposal): { start: Date; end: Date } => {
  const now = new Date();
  let searchStart = addMinutes(now, 120);

  for (const proposedTime of proposal.proposedTimes) {
    if (!proposedTime.datetime) continue;

    const timeRef = proposedTime.datetime.toLowerCase();

    if (timeRef.includes("next week")) {
      const daysUntilNextMonday = ((8 - now.getDay()) % 7) || 7;
      const nextMonday = startOfDay(addDays(now, daysUntilNextMonday));
      searchStart = new Date(nextMonday.getTime() + 9 * 60 * 60 * 1000);
      break;
    }

    if (timeRef.includes("this week")) {
      const daysUntilMonday = (1 - now.getDay() + 7) % 7;
      const thisMonday = startOfDay(addDays(now, daysUntilMonday));
      const mondayNineAm = new Date(thisMonday.getTime() + 9 * 60 * 60 * 1000);
      searchStart = now > mondayNineAm ? addHours(now, 2) : mondayNineAm;
      break;
    }

    if (timeRef.includes("today")) {
      searchStart = addHours(now, 2);
      break;
    }

    if (timeRef.includes("tomorrow")) {
      searchStart = startOfDay(addDays(now, 1));
      searchStart = new Date(searchStart.getTime() + 9 * 60 * 60 * 1000);
      break;
    }

    if (proposedTime.type === "specific_datetime") {
      try {
        const parsedDate = parseISO(proposedTime.datetime);
        if (isValid(parsedDate)) {
          searchStart = parsedDate;
          break;
        }
      } catch { }
    }
  }

  let daysAhead = 14;
  if (proposal.urgency === "immediate") {
    daysAhead = 3;
  } else if (proposal.urgency === "soon") {
    daysAhead = 7;
  }

  const searchEnd = addDays(searchStart, daysAhead);

  return { start: searchStart, end: searchEnd };
};

export const suggestTimes = async ({
  meetingProposalEmailMessage,
  calendarEvents,
  userEmail,
  userPreferences = defaultUserPreferences,
  debug = false,
}: {
  meetingProposalEmailMessage: EmailMessage;
  calendarEvents: CalendarEvent[];
  userEmail: string;
  userPreferences?: UserPreferences;
  debug?: boolean;
}): Promise<
  | TimeInterval[]
  | {
    proposalExtractedFromLLM: MeetingProposal;
    duration: number;
    searchRange: { start: Date; end: Date };
    busyIntervals: TimeInterval[];
    freeSlots: TimeInterval[];
    selectedSlots: TimeInterval[];
  }
> => {
  try {
    const proposalExtractedFromLLM = await extractMeetingProposal(meetingProposalEmailMessage);

    const duration = inferDuration(proposalExtractedFromLLM, userPreferences.defaultDurationMinutes);
    const searchRange = determineSearchRange(proposalExtractedFromLLM);
    const { start, end } = searchRange;

    const busyIntervals = getBusyIntervals(
      calendarEvents,
      userEmail,
      start,
      end,
      userPreferences.bufferMinutes,
      userPreferences.allowBackToBack
    );
    const freeSlots = findFreeSlots(busyIntervals, duration, start, end, userPreferences);
    const selectedSlots = scoreAndSelectSlots(freeSlots, proposalExtractedFromLLM, 3);

    if (debug) {
      return {
        proposalExtractedFromLLM,
        duration,
        searchRange,
        busyIntervals,
        freeSlots,
        selectedSlots,
      };
    }

    return selectedSlots;
  } catch (error) {
    console.error("Error in suggestTimes:", error);
    return [];
  }
};

// Example usage
const exampleEmailMessage: EmailMessage = {
  threadId: "AAMkAGI2TAAA=",
  isFirstInThread: true,
  providerEmailId: "AAMkAGI2TAAA=",
  to: [{ address: "matt.ffrench@fyxer.com", name: "Matt Ffrench" }],
  from: { address: "john@doe.com", name: "John Doe" },
  cc: [],
  bcc: [],
  content: "",
  fullBody: "Can you do our board meeting next week one afternoon?",
  isDraft: false,
  isSpam: false,
  messageId: "<>",
  forwardedContent: undefined,
  hasDoctypeHtml: false,
  subject: "Meeting Proposal",
  sentAt: new Date(),
  attachmentData: [],
  hasUnsubscribeLink: false,
  headers: [],
  folderIds: [],
  categoryIds: [],
  isRead: false,
  toEmailAddresses: ["matt.ffrench@fyxer.com"],
  ccEmailAddresses: [],
};

suggestTimes({
  meetingProposalEmailMessage: exampleEmailMessage,
  calendarEvents,
  userEmail: USER_EMAIL,
  userPreferences: defaultUserPreferences,
  debug: false,
}).then((slots) => {
  console.log("suggested slots", JSON.stringify(slots, null, 2));
});
