// needs to be lowercased to be url safe
export enum OauthIntegration {
  GOOGLE_CALENDAR = "google-calendar",
  MICROSOFT_OUTLOOK_CALENDAR = "microsoft-outlook-calendar",
  GMAIL = "gmail",
  MICROSOFT_OUTLOOK_EMAIL = "microsoft-outlook-email",
  SLACK = "slack",
  HUBSPOT = "hubspot",
}

// needs to be lowercased to be url safe
export enum OauthProvider {
  GOOGLE = "google",
  MICROSOFT = "microsoft",
  SLACK = "slack",
  HUBSPOT = "hubspot",
}

export enum OauthServiceType {
  CALENDAR = "CALENDAR",
  EMAIL = "EMAIL",
  INSTANT_MESSAGING = "INSTANT_MESSAGING",
  CRM = "CRM",
}

export const getProviderFromIntegration = (integration: OauthIntegration) => {
  switch (integration) {
    case OauthIntegration.GMAIL:
    case OauthIntegration.GOOGLE_CALENDAR:
      return OauthProvider.GOOGLE;
    case OauthIntegration.MICROSOFT_OUTLOOK_EMAIL:
    case OauthIntegration.MICROSOFT_OUTLOOK_CALENDAR:
      return OauthProvider.MICROSOFT;
    case OauthIntegration.SLACK:
      return OauthProvider.SLACK;
    case OauthIntegration.HUBSPOT:
      return OauthProvider.HUBSPOT;
  }
};

export const getIsServiceTypeOrgLevel = (serviceType: OauthServiceType) => {
  switch (serviceType) {
    case OauthServiceType.CRM:
      return true;
    default:
      return false;
  }
};

type ScopeRequestMode = "request" | "validate";

const getGoogleScopes = (scopes: string[]) => [...scopes, "https://www.googleapis.com/auth/userinfo.email"];

const getMicrosoftScopes = (scopes: string[], mode: ScopeRequestMode) => [
  ...scopes,
  "https://graph.microsoft.com/User.Read",
  ...(mode === "request" ? ["offline_access"] : []),
];

export const getScopes = ({ integration, mode }: { integration: OauthIntegration; mode: "request" | "validate" }) => {
  switch (integration) {
    case OauthIntegration.GMAIL:
      return getGoogleScopes(["https://www.googleapis.com/auth/gmail.modify"]);
    case OauthIntegration.GOOGLE_CALENDAR:
      return getGoogleScopes([
        "https://www.googleapis.com/auth/calendar.events",
        "https://www.googleapis.com/auth/calendar.settings.readonly",
      ]);
    case OauthIntegration.MICROSOFT_OUTLOOK_EMAIL:
      return getMicrosoftScopes(
        ["https://graph.microsoft.com/Mail.ReadWrite", "https://graph.microsoft.com/MailboxSettings.ReadWrite"],
        mode,
      );
    case OauthIntegration.MICROSOFT_OUTLOOK_CALENDAR:
      return getMicrosoftScopes(
        ["https://graph.microsoft.com/Calendars.ReadWrite", "https://graph.microsoft.com/MailboxSettings.ReadWrite"],
        mode,
      );
    case OauthIntegration.SLACK:
      return [
        "channels:history",
        "channels:read",
        "chat:write",
        "files:read",
        "groups:history",
        "groups:read",
        "im:history",
        "im:read",
        "mpim:history",
        "mpim:read",
        "reactions:read",
        "users:read",
        "users:read.email",
      ];
    case OauthIntegration.HUBSPOT:
      return [
        "crm.objects.contacts.read",
        "crm.objects.contacts.write",
        "crm.objects.deals.read",
        "crm.objects.companies.read",
      ];
  }
};

export enum OauthConnectionStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
}

export type OauthConnection = {
  organisationId: string;
  userId: string;
  isOrgLevel?: boolean;
  integration: OauthIntegration;
  serviceType: OauthServiceType;
  status: OauthConnectionStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: { [key: string]: any };
  emailSignature?: string;
  createdAt: Date;
  refreshToken: string;
  approvedScopes: string[];
  isSyncInProgress?: boolean;
};
