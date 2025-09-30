import { calendarEvents } from "./calendarEvents";
import { EmailMessage } from "./types/EmailMessage";
import { getTimeIntervalsUserIsBusy } from "./triggers/onNewEmailMessage/getTimeIntervalsUserIsBusy";

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
};


