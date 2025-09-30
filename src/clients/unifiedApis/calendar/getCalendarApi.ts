import { calendarEvents } from "../../../calendarEvents";
import { OauthIntegration } from "../../../types/OauthConnection";
import { areIntervalsOverlapping } from "date-fns";

const calendarIntegrations = [
  OauthIntegration.GOOGLE_CALENDAR,
] as const;

export type CalendarIntegration = (typeof calendarIntegrations)[number];



export const getCalendarApi = async ({ userEmail }: { userEmail: string }) => {
  return {
    timezone: () => ({
      [OauthIntegration.GOOGLE_CALENDAR]: () => "America/New_York", // MOCKED
    }),
    calendars: {
      id: ({calendarId}: {calendarId?: string} = {calendarId: "DEFAULT"}) => ({
        events: {
          list: {
            betweenDates: ({
              startDate,
              endDate,
              maxResults = 1000,
              cursor,
            }: {
              startDate: Date;
              endDate: Date;
              maxResults?: number;
              cursor?: number;
            }) => ({
              [OauthIntegration.GOOGLE_CALENDAR]: () =>
                calendarEvents
                  .filter((event: { startsAt: Date; endsAt: Date }) =>
                    areIntervalsOverlapping({
                      start: event.startsAt,
                      end: event.endsAt,
                    }, {
                      start: startDate,
                      end: endDate,
                    })
                  )
                  .slice(cursor ?? 0, cursor ? cursor + maxResults : maxResults),
            }),
          },
        },
      }),
    },
  };
};

export type CalendarApi = Awaited<ReturnType<typeof getCalendarApi>>;
