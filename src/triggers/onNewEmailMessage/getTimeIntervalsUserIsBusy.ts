import { CalendarEvent, TimeInterval } from "../../types/CalendarEvent";
import {
  parseISO,
  addDays,
  startOfDay,
  max,
  min,
  addHours,
  startOfWeek,
  isWeekend,
  getHours,
  getMinutes,
  differenceInMinutes,
  addBusinessDays,
  startOfMinute,
  addWeeks,
  addMinutes,
  areIntervalsOverlapping,
  endOfDay,
} from "date-fns";

import {
  // UTC => local
  toZonedTime,
  // local => UTC
  fromZonedTime,
} from "date-fns-tz";

export const getTimeIntervalsUserIsBusy = (
  eventsFromUsersCalendar: CalendarEvent[],
  userEmail: string
): TimeInterval[] => eventsFromUsersCalendar;
