import { EmailMessage } from "./types/EmailMessage";
import { TimeInterval } from "./types/TimeInterval";
import { CalendarEvent } from "./types/CalendarEvent";
import { calendarEvents } from "./calendarEvents";
import { openai } from "./clients/openai";

const USER_EMAIL = "matt.ffrench@fyxer.com";

export const suggestTimes = async ({
  meetingProposalEmailMessage,
  calendarEvents,
  userEmail,
}: {
  meetingProposalEmailMessage: EmailMessage;
  calendarEvents: CalendarEvent[];
  userEmail: string;
}): Promise<TimeInterval[]> => {
  return [];
};

suggestTimes({
  meetingProposalEmailMessage: {
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
  },
  calendarEvents,
  userEmail: USER_EMAIL,
}).then((slots) => {
  console.log("suggested slots", slots);
});
