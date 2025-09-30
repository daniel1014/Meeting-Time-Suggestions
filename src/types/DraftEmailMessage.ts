import { EmailPerson } from "./EmailMessage";

export type DraftEmailMessage = {
  userEmail: string;
  to: EmailPerson<false>[];
  cc: EmailPerson<false>[];
  bcc: EmailPerson<false>[];
  subject: string;
  draftBody: string;
};