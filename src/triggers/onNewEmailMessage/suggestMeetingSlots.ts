import { CalendarEvent, TimeInterval } from "../../types/CalendarEvent";
import { EmailMessage } from "../../types/EmailMessage";


const isEmailMessageContainingMeetingProposal = (
  emailMessage: EmailMessage
): boolean => {
  return false; // TODO
};

const suggestMeetingSlotsForMeetingProposal = ({
  emailMessage,
  userCalendarEvents,
}: {
  emailMessage: EmailMessage;
  userCalendarEvents: CalendarEvent[];
}): TimeInterval[] => {
  return [
    // returning of available meeting slots
  ];
};