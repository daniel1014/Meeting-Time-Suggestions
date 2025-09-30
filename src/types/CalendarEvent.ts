const attendanceDecisions = [
  "PENDING",
  "TENTATIVE",
  "ACCEPTED",
  "DECLINED",
] as const;

export type AttendanceDecision = (typeof attendanceDecisions)[number];

export type Invitee = {
  name: string;
  emailAddress: string;
  attendanceDecision: AttendanceDecision;
};

export type CalendarEvent = {
  // this is from the google cal api
  // UTC
  startsAt: Date;
  endsAt: Date; //
  organiser: Omit<Invitee, "attendanceDecision">;
  invitees: Invitee[];
  isAllDay: boolean;
  isRecurring: boolean;
  title: string;
};

export type TimeInterval = {
  // UTC
  startsAt: Date;
  endsAt: Date;
};
