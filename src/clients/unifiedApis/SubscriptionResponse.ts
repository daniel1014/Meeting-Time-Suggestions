import { OauthIntegration } from "../../types/OauthConnection";

export type SubscriptionResponse =
  | {
      integration: OauthIntegration.GMAIL;
      historyId: string;
    }
  | {
      integration: OauthIntegration.MICROSOFT_OUTLOOK_EMAIL | OauthIntegration.MICROSOFT_OUTLOOK_CALENDAR;
      subscriptionIds: string[];
    }
  | {
      integration: OauthIntegration.GOOGLE_CALENDAR;
      resourceId: string;
      subscriptionId: string;
      expiresAt: Date;
    };
