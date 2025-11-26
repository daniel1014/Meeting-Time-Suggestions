import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

export const MeetingProposalSchema = z.object({
  proposedTimes: z.array(
    z.object({
      type: z.enum(["specific_datetime", "day_time_range", "day_only", "vague"]),
      datetime: z.string().nullable().optional(),
      dayOfWeek: z.string().nullable().optional(),
      timeRange: z
        .object({ start: z.string().nullable().optional(), end: z.string().nullable().optional() })
        .nullable()
        .optional(),
      timezone: z.string().nullable().optional(),
    })
  ),
  duration: z.object({
    minutes: z.number().nullable().optional(),
    confidence: z.enum(["explicit", "inferred", "unknown"]),
  }),
  urgency: z.enum(["immediate", "soon", "flexible", "unspecified"]),
  meetingType: z.string().nullable().optional(),
  constraints: z.object({
    mustBeAfternoon: z.boolean().nullable().optional(),
    mustBeMorning: z.boolean().nullable().optional(),
    senderTimezone: z.string().nullable().optional(),
  }),
});

export type MeetingProposal = z.infer<typeof MeetingProposalSchema>;

// Downgraded Zod from v4 to v3 for compatibility with OpenAI SDK's zodResponseFormat helper (structured outputs)
export const meetingProposalResponseFormat = zodResponseFormat(
  MeetingProposalSchema,
  "meeting_proposal"
);
