import { parseISO, differenceInMilliseconds, addMilliseconds } from "date-fns";
import { AttendanceDecision } from "./types/CalendarEvent";

const RAW_STARTS_AT = parseISO("2024-01-31T00:00:00Z");
const startOfUTCDay = (date: Date): Date =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
const convertDateToFromNow = (date: Date) =>
  addMilliseconds(startOfUTCDay(new Date()), differenceInMilliseconds(date, RAW_STARTS_AT));

export const calendarEvents = [
  {
    title: "Matt OOO",
    startsAt: "2024-02-02T00:00:00Z",
    endsAt: "2024-02-14T00:00:00Z",
    isAllDay: true,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [],
  },
  {
    title: "Standup",
    startsAt: "2024-01-31T09:00:00Z",
    endsAt: "2024-01-31T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-01-31T14:00:00Z",
    endsAt: "2024-01-31T15:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-01-31T11:30:00Z",
    endsAt: "2024-01-31T12:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-01-31T10:00:00Z",
    endsAt: "2024-01-31T10:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-01T09:00:00Z",
    endsAt: "2024-02-01T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-01T13:30:00Z",
    endsAt: "2024-02-01T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-01T14:30:00Z",
    endsAt: "2024-02-01T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-01T10:30:00Z",
    endsAt: "2024-02-01T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-01T00:00:00Z",
    endsAt: "2024-02-02T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-02T09:00:00Z",
    endsAt: "2024-02-02T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-02T16:00:00Z",
    endsAt: "2024-02-02T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-02T10:30:00Z",
    endsAt: "2024-02-02T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-05T09:00:00Z",
    endsAt: "2024-02-05T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-05T16:30:00Z",
    endsAt: "2024-02-05T16:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-05T13:30:00Z",
    endsAt: "2024-02-05T13:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-05T12:30:00Z",
    endsAt: "2024-02-05T13:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-02-05T15:00:00Z",
    endsAt: "2024-02-05T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-02-06T09:00:00Z",
    endsAt: "2024-02-06T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-06T12:30:00Z",
    endsAt: "2024-02-06T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-06T11:00:00Z",
    endsAt: "2024-02-06T11:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-06T00:00:00Z",
    endsAt: "2024-02-07T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-07T09:00:00Z",
    endsAt: "2024-02-07T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-07T14:00:00Z",
    endsAt: "2024-02-07T14:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-07T13:30:00Z",
    endsAt: "2024-02-07T13:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-07T11:00:00Z",
    endsAt: "2024-02-07T12:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-08T09:00:00Z",
    endsAt: "2024-02-08T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-08T15:00:00Z",
    endsAt: "2024-02-08T15:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-08T16:00:00Z",
    endsAt: "2024-02-08T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-08T12:30:00Z",
    endsAt: "2024-02-08T12:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-08T00:00:00Z",
    endsAt: "2024-02-09T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-09T09:00:00Z",
    endsAt: "2024-02-09T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-09T12:00:00Z",
    endsAt: "2024-02-09T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-09T14:30:00Z",
    endsAt: "2024-02-09T14:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-09T10:30:00Z",
    endsAt: "2024-02-09T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-12T09:00:00Z",
    endsAt: "2024-02-12T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-12T14:30:00Z",
    endsAt: "2024-02-12T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-12T16:30:00Z",
    endsAt: "2024-02-12T16:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-12T15:00:00Z",
    endsAt: "2024-02-12T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-12T10:00:00Z",
    endsAt: "2024-02-12T10:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-02-12T15:00:00Z",
    endsAt: "2024-02-12T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-02-13T09:00:00Z",
    endsAt: "2024-02-13T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-13T12:30:00Z",
    endsAt: "2024-02-13T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-13T16:30:00Z",
    endsAt: "2024-02-13T16:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-13T15:00:00Z",
    endsAt: "2024-02-13T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-13T00:00:00Z",
    endsAt: "2024-02-14T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-14T09:00:00Z",
    endsAt: "2024-02-14T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-14T12:30:00Z",
    endsAt: "2024-02-14T13:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-14T14:30:00Z",
    endsAt: "2024-02-14T15:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-14T12:30:00Z",
    endsAt: "2024-02-14T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-15T09:00:00Z",
    endsAt: "2024-02-15T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-15T13:00:00Z",
    endsAt: "2024-02-15T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-15T16:00:00Z",
    endsAt: "2024-02-15T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-15T12:00:00Z",
    endsAt: "2024-02-15T12:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-15T13:00:00Z",
    endsAt: "2024-02-15T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-15T00:00:00Z",
    endsAt: "2024-02-16T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-16T09:00:00Z",
    endsAt: "2024-02-16T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-16T11:30:00Z",
    endsAt: "2024-02-16T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-16T15:30:00Z",
    endsAt: "2024-02-16T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-16T14:00:00Z",
    endsAt: "2024-02-16T14:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-19T09:00:00Z",
    endsAt: "2024-02-19T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-19T16:30:00Z",
    endsAt: "2024-02-19T17:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-19T12:30:00Z",
    endsAt: "2024-02-19T12:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-19T12:30:00Z",
    endsAt: "2024-02-19T12:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-02-19T15:00:00Z",
    endsAt: "2024-02-19T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-02-20T09:00:00Z",
    endsAt: "2024-02-20T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-20T12:00:00Z",
    endsAt: "2024-02-20T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-20T13:30:00Z",
    endsAt: "2024-02-20T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-20T10:00:00Z",
    endsAt: "2024-02-20T10:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-20T00:00:00Z",
    endsAt: "2024-02-21T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-21T09:00:00Z",
    endsAt: "2024-02-21T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-21T15:00:00Z",
    endsAt: "2024-02-21T16:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-21T11:00:00Z",
    endsAt: "2024-02-21T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-21T10:00:00Z",
    endsAt: "2024-02-21T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-21T12:30:00Z",
    endsAt: "2024-02-21T13:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-22T09:00:00Z",
    endsAt: "2024-02-22T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-22T13:00:00Z",
    endsAt: "2024-02-22T13:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-22T13:00:00Z",
    endsAt: "2024-02-22T13:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-22T11:00:00Z",
    endsAt: "2024-02-22T11:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-22T00:00:00Z",
    endsAt: "2024-02-23T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-23T09:00:00Z",
    endsAt: "2024-02-23T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-23T13:30:00Z",
    endsAt: "2024-02-23T13:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-23T14:30:00Z",
    endsAt: "2024-02-23T14:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-02-23T15:00:00Z",
    endsAt: "2024-02-23T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-23T14:30:00Z",
    endsAt: "2024-02-23T14:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-26T09:00:00Z",
    endsAt: "2024-02-26T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-26T11:30:00Z",
    endsAt: "2024-02-26T11:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-02-26T13:30:00Z",
    endsAt: "2024-02-26T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-02-26T15:00:00Z",
    endsAt: "2024-02-26T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-02-27T09:00:00Z",
    endsAt: "2024-02-27T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-27T14:30:00Z",
    endsAt: "2024-02-27T14:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-27T15:30:00Z",
    endsAt: "2024-02-27T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-27T10:30:00Z",
    endsAt: "2024-02-27T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-27T00:00:00Z",
    endsAt: "2024-02-28T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-02-28T09:00:00Z",
    endsAt: "2024-02-28T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-02-28T15:30:00Z",
    endsAt: "2024-02-28T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-02-28T15:00:00Z",
    endsAt: "2024-02-28T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-28T10:00:00Z",
    endsAt: "2024-02-28T10:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-02-29T09:00:00Z",
    endsAt: "2024-02-29T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-02-29T15:30:00Z",
    endsAt: "2024-02-29T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-02-29T16:00:00Z",
    endsAt: "2024-02-29T17:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-02-29T00:00:00Z",
    endsAt: "2024-03-01T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-01T09:00:00Z",
    endsAt: "2024-03-01T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-01T16:00:00Z",
    endsAt: "2024-03-01T17:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-01T15:30:00Z",
    endsAt: "2024-03-01T15:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-01T16:30:00Z",
    endsAt: "2024-03-01T17:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-01T11:00:00Z",
    endsAt: "2024-03-01T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-04T09:00:00Z",
    endsAt: "2024-03-04T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-04T11:00:00Z",
    endsAt: "2024-03-04T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-04T12:30:00Z",
    endsAt: "2024-03-04T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-04T16:30:00Z",
    endsAt: "2024-03-04T17:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-03-04T15:00:00Z",
    endsAt: "2024-03-04T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-03-05T09:00:00Z",
    endsAt: "2024-03-05T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-05T12:00:00Z",
    endsAt: "2024-03-05T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-05T11:00:00Z",
    endsAt: "2024-03-05T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-05T12:30:00Z",
    endsAt: "2024-03-05T13:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-05T00:00:00Z",
    endsAt: "2024-03-06T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-06T09:00:00Z",
    endsAt: "2024-03-06T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-06T14:00:00Z",
    endsAt: "2024-03-06T14:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-06T13:30:00Z",
    endsAt: "2024-03-06T14:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-06T16:00:00Z",
    endsAt: "2024-03-06T16:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-07T09:00:00Z",
    endsAt: "2024-03-07T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-07T13:00:00Z",
    endsAt: "2024-03-07T13:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-07T11:30:00Z",
    endsAt: "2024-03-07T12:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-07T14:00:00Z",
    endsAt: "2024-03-07T14:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-07T11:30:00Z",
    endsAt: "2024-03-07T11:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-07T00:00:00Z",
    endsAt: "2024-03-08T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-08T09:00:00Z",
    endsAt: "2024-03-08T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-08T12:30:00Z",
    endsAt: "2024-03-08T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-08T15:30:00Z",
    endsAt: "2024-03-08T16:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-08T14:30:00Z",
    endsAt: "2024-03-08T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-11T09:00:00Z",
    endsAt: "2024-03-11T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-11T12:00:00Z",
    endsAt: "2024-03-11T12:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-11T12:00:00Z",
    endsAt: "2024-03-11T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-11T10:00:00Z",
    endsAt: "2024-03-11T10:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-03-11T15:00:00Z",
    endsAt: "2024-03-11T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-03-12T09:00:00Z",
    endsAt: "2024-03-12T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-12T11:30:00Z",
    endsAt: "2024-03-12T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-12T12:30:00Z",
    endsAt: "2024-03-12T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-12T10:30:00Z",
    endsAt: "2024-03-12T10:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-12T00:00:00Z",
    endsAt: "2024-03-13T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-13T09:00:00Z",
    endsAt: "2024-03-13T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-13T12:00:00Z",
    endsAt: "2024-03-13T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-13T10:00:00Z",
    endsAt: "2024-03-13T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-13T11:30:00Z",
    endsAt: "2024-03-13T12:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-14T09:00:00Z",
    endsAt: "2024-03-14T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-14T12:00:00Z",
    endsAt: "2024-03-14T13:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-03-14T12:00:00Z",
    endsAt: "2024-03-14T12:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-14T13:00:00Z",
    endsAt: "2024-03-14T14:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "jack.udoh@fyxer.com",
      name: "Jack Udoh",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-14T00:00:00Z",
    endsAt: "2024-03-15T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-15T09:00:00Z",
    endsAt: "2024-03-15T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-03-15T15:30:00Z",
    endsAt: "2024-03-15T15:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-15T10:00:00Z",
    endsAt: "2024-03-15T11:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-15T15:30:00Z",
    endsAt: "2024-03-15T15:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-15T10:00:00Z",
    endsAt: "2024-03-15T10:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-18T09:00:00Z",
    endsAt: "2024-03-18T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-03-18T12:00:00Z",
    endsAt: "2024-03-18T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-18T12:00:00Z",
    endsAt: "2024-03-18T12:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-18T12:00:00Z",
    endsAt: "2024-03-18T12:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-18T16:30:00Z",
    endsAt: "2024-03-18T16:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-03-18T15:00:00Z",
    endsAt: "2024-03-18T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-03-19T09:00:00Z",
    endsAt: "2024-03-19T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-19T15:00:00Z",
    endsAt: "2024-03-19T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-19T13:30:00Z",
    endsAt: "2024-03-19T13:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-19T16:00:00Z",
    endsAt: "2024-03-19T16:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-19T00:00:00Z",
    endsAt: "2024-03-20T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-20T09:00:00Z",
    endsAt: "2024-03-20T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-20T12:00:00Z",
    endsAt: "2024-03-20T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-20T16:30:00Z",
    endsAt: "2024-03-20T17:00:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-20T13:00:00Z",
    endsAt: "2024-03-20T13:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-21T09:00:00Z",
    endsAt: "2024-03-21T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-03-21T12:00:00Z",
    endsAt: "2024-03-21T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "susan.khan@fyxer.com",
      name: "Susan Khan",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-21T15:00:00Z",
    endsAt: "2024-03-21T15:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-21T00:00:00Z",
    endsAt: "2024-03-22T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
  {
    title: "Standup",
    startsAt: "2024-03-22T09:00:00Z",
    endsAt: "2024-03-22T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client call",
    startsAt: "2024-03-22T11:30:00Z",
    endsAt: "2024-03-22T11:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-22T10:30:00Z",
    endsAt: "2024-03-22T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-22T16:00:00Z",
    endsAt: "2024-03-22T16:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Standup",
    startsAt: "2024-03-25T09:00:00Z",
    endsAt: "2024-03-25T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-25T10:30:00Z",
    endsAt: "2024-03-25T11:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "adrian.chen@fyxer.com",
      name: "Adrian Chen",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "jason.dennis@dealcapital",
        name: "Jason Dennis",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Client catchup",
    startsAt: "2024-03-25T10:30:00Z",
    endsAt: "2024-03-25T10:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "samual@time.vc",
        name: "Samual",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-25T13:00:00Z",
    endsAt: "2024-03-25T13:15:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "TENTATIVE",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Catchup",
    startsAt: "2024-03-25T10:30:00Z",
    endsAt: "2024-03-25T10:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "DECLINED",
      },
    ],
  },
  {
    title: "Weekly Business Review",
    startsAt: "2024-03-25T15:00:00Z",
    endsAt: "2024-03-25T16:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: false,
  },
  {
    title: "Standup",
    startsAt: "2024-03-26T09:00:00Z",
    endsAt: "2024-03-26T09:15:00Z",
    isAllDay: false,
    isRecurring: true,
    organiser: {
      emailAddress: "matt.ffrench@fyxer.com",
      name: "Matt Ffrench",
    },
    invitees: [
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Client meeting",
    startsAt: "2024-03-26T14:00:00Z",
    endsAt: "2024-03-26T14:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "ellie.rice@fyxer.com",
      name: "Ellie Rice",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Refinement Session",
    startsAt: "2024-03-26T12:00:00Z",
    endsAt: "2024-03-26T12:30:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "archie@fyxer.com",
      name: "Archie",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
    ],
  },
  {
    title: "Accuracy review",
    startsAt: "2024-03-26T15:30:00Z",
    endsAt: "2024-03-26T15:45:00Z",
    isAllDay: false,
    isRecurring: false,
    organiser: {
      emailAddress: "richard@fyxer.com",
      name: "Richard",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "DECLINED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "TENTATIVE",
      },
    ],
  },
  {
    title: "Work in Shoreditch",
    startsAt: "2024-03-26T00:00:00Z",
    endsAt: "2024-03-27T00:00:00Z",
    organiser: {
      name: "Archie Hollingsworth",
      emailAddress: "archie@fyxer.com",
    },
    invitees: [
      {
        emailAddress: "matt.ffrench@fyxer.com",
        name: "Matt Ffrench",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "adrian.chen@fyxer.com",
        name: "Adrian Chen",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "susan.khan@fyxer.com",
        name: "Susan Khan",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "ellie.rice@fyxer.com",
        name: "Ellie Rice",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "jack.udoh@fyxer.com",
        name: "Jack Udoh",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "archie@fyxer.com",
        name: "Archie",
        attendanceDecision: "ACCEPTED",
      },
      {
        emailAddress: "richard@fyxer.com",
        name: "Richard",
        attendanceDecision: "ACCEPTED",
      },
    ],
    isRecurring: true,
    isAllDay: true,
  },
]
.map((event) => ({
  ...event,
  startsAt: convertDateToFromNow(parseISO(event.startsAt)),
  endsAt: convertDateToFromNow(parseISO(event.endsAt)),
  invitees: event.invitees.map((invitee) => ({
    ...invitee,
    attendanceDecision: invitee.attendanceDecision as AttendanceDecision,
  })),
}));