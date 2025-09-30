import { CalendarEvent, TimeInterval } from "../../types/CalendarEvent";
import { EmailMessage } from "../../types/EmailMessage";
import { getTimeIntervalsUserIsBusy } from "./getTimeIntervalsUserIsBusy";
import { openAIClient } from "../../clients/openai";

const isEmailMessageContainingMeetingProposal = async (
  emailMessage: EmailMessage
): Promise<boolean> => {
  // unclear how a thread of emails is passed based on this type, assuming single email for now
  const emailContent = `${emailMessage.subject} ${emailMessage.fullBody}`;
  
  // LLM call to determine if email contains meeting proposal

  const prompt = `
  You are given the body of an email. Determine if it contains a proposal for a meeting (e.g., suggesting a time, asking to schedule, proposing to meet). 
  Answer only "YES" or "NO".

  Email content with subject:
  """
  ${emailContent}
  """
  `;

  const response = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini", // use "gpt-4o-mini" or "gpt-4o" for efficiency
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 5
  });

  const result = response.choices[0].message?.content?.trim().toUpperCase();
  return result === "YES";

};

const suggestMeetingSlotsForMeetingProposal = async ({
  emailMessage,
  userCalendarEvents,
}: {
  emailMessage: EmailMessage;
  userCalendarEvents: CalendarEvent[];
}): Promise<TimeInterval[]> => {
  // We don't have sender's calendar events, so only use the sender's email to detect times
  // and user's calendar events to detect free slots

  const userBusySlots = getTimeIntervalsUserIsBusy(
    userCalendarEvents,
    emailMessage.toEmailAddresses[0] // assuming first recipient is the user
  );

  // TODO: Consider using LLM only to parse email for specific times mentioned, e.g., "next Tuesday at 3pm" or "Thursday afternoon"
  // and then use that to filter the busy slots, rather than asking LLM to suggest times entirely. For today though, this is less complicated and faster; although more prone to errors.


  const prompt = `
  The sender has sent the following email:

  Subject: ${emailMessage.subject}
  Body: ${emailMessage.fullBody}

  The email was sent at ${emailMessage.sentAt.toISOString()}. Use the above information as time preferences for the meeting.

  The user's existing meeting slots are as follows: Do not schedule during this time.
  ${JSON.stringify(userBusySlots)}


  Do not schedule outside of working hours (9am-5pm) or on weekends. Always prefer days with existing meetings first.
  Choose time slots that begin on the hour if possible. For example, 9:00 to 10:00 is better than 9:15 to 10:15. Choose one hour slots unless otherwise asked.

  Based on the email content and the user's busy slots, suggest five possible time intervals for a meeting.
  Make sure the suggested slots do not overlap with the user's busy slots and are within the next two weeks, unless otherwise requested.
  The response should be a JSON array of objects with the following structure:
  [{ "startsAt": "<start-time>", "endsAt": "<end-time>" }]
  `;

  const response = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini", // use "gpt-4o-mini" or "gpt-4o" for efficiency
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 800,
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "meeting_time_suggestions",
        schema: {
          type: "object",
          properties: {
            suggestions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  startsAt: { 
                    type: "string",
                    description: "Start time in ISO 8601 format"
                  },
                  endsAt: { 
                    type: "string",
                    description: "End time in ISO 8601 format"
                  }
                },
                required: ["startsAt", "endsAt"],
                additionalProperties: false
              }
            }
          },
          required: ["suggestions"],
          additionalProperties: false
        }
      }
    }
  });

  try {
    const suggestedSlots = JSON.parse(response.choices[0].message?.content || "[]");
    return Array.isArray(suggestedSlots.suggestions) ? suggestedSlots.suggestions : [];
  } catch (error) {
    console.error("Failed to parse suggested meeting slots:", error);
    return [];
  }
};

export {
  isEmailMessageContainingMeetingProposal,
  suggestMeetingSlotsForMeetingProposal,
};