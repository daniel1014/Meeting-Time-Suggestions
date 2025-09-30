export type EmailPerson<RequireEmail extends boolean> =
  RequireEmail extends true
    ? { address: string; name?: string }
    : { address: string; name?: string } | { name: string; address?: string };

type AttachmentDatum = {
  mimeType: string;
  filename: string;
  attachmentId: string | undefined;
  size: number | undefined;
  type: "file" | "item" | "reference" | undefined;
};

export interface BasicEmailMessage {
  threadId: string | undefined;
  isFirstInThread: boolean | undefined;
  providerEmailId: string;
  to: EmailPerson<false>[];
  from: EmailPerson<true>;
  cc: EmailPerson<false>[];
  bcc: EmailPerson<false>[];
  content: string;
  fullBody: string | undefined;
  isDraft: boolean;
  isSpam: boolean;
  messageId: string;
  forwardedContent: string | undefined;
  hasDoctypeHtml: boolean;
  subject: string;
  sentAt: Date;
  attachmentData: AttachmentDatum[];
  hasUnsubscribeLink: boolean;
  headers: { name: string; value: string }[] | undefined;

  folderIds: string[] | undefined;
  categoryIds: string[] | undefined;
  isRead: boolean | undefined;
}

export interface EmailMessage extends BasicEmailMessage {
  toEmailAddresses: string[];
  ccEmailAddresses: string[];
  followUp?: {
    isScheduled: boolean;
    scheduledAt: Date;
    wasSent: boolean;
    sentAt?: Date;
    providerId?: string;
  };
}
