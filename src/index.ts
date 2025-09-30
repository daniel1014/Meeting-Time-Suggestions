import { calendarEvents } from "./calendarEvents";
import { EmailMessage } from "./types/EmailMessage";
import { getTimeIntervalsUserIsBusy } from "./triggers/onNewEmailMessage/getTimeIntervalsUserIsBusy";
import { isEmailMessageContainingMeetingProposal, suggestMeetingSlotsForMeetingProposal } from "./triggers/onNewEmailMessage/suggestMeetingSlots";

// consts
const USER_EMAIL = "matt.ffrench@fyxer.com";
const usersCalendarEvents = calendarEvents.map((event) => ({...event, userEmail: USER_EMAIL}));

// Q-PRE
export const mainPre = () => {
  return getTimeIntervalsUserIsBusy(usersCalendarEvents, USER_EMAIL);
}

// Q-MAIN-1
export const main1 = async ({
  usersEmailMessage,
}: {
  usersEmailMessage: EmailMessage;
}) => {
  // See functions in ./triggers/onNewEmailMessage/suggestMeetingSlots.ts

  const isMeetingProposal = await isEmailMessageContainingMeetingProposal(usersEmailMessage);

  if (!isMeetingProposal) {
    return [];
  }

  const suggestedMeetingSlots = await suggestMeetingSlotsForMeetingProposal({
    emailMessage: usersEmailMessage,
    userCalendarEvents: usersCalendarEvents,
  });

  return suggestedMeetingSlots;
};

// testing, assuming this is how they'll be called
console.log("mainPre", mainPre());

main1({
  usersEmailMessage: {
    threadId: "AAMkAGI2TAAA=",
    isFirstInThread: true,
    providerEmailId: "AAMkAGI2TAAA=",
    to: [{ address: "matt.ffrench@fyxer.com", name: "Matt Ffrench" }],
    from: { address: "john@doe.com", name: "John Doe" },
    cc: [],
    bcc: [],
    content: "Hi Matt, I hope you're well. Are you available for a meeting next week to discuss our project? Let me know what times work for you. Best, John",
    fullBody: "Hi Matt, I hope you're well. Are you available for a meeting next week to discuss our project? Let me know what times work for you. Best, John",
    isDraft: false,
    isSpam: false,
    messageId: "<>",
    forwardedContent: undefined,
    hasDoctypeHtml: false,
    subject: "Meeting Proposal",
    sentAt: new Date("2024-10-01T10:00:00Z"),
    attachmentData: [],
    hasUnsubscribeLink: false,
    headers: [],
    folderIds: [],
    categoryIds: [],
    isRead: false,
    toEmailAddresses: ["matt.ffrench@fyxer.com"],
    ccEmailAddresses: [],
  }
}).then((slots) => {
  console.log("suggested slots", slots);
});


