import { DraftEmailMessage } from "../../../types/DraftEmailMessage";
import { EmailMessage } from "../../../types/EmailMessage";

export const createDraft = ({
  userEmail,
  draftBody,
  draftRespondsToEmailMessage,
}: {
  userEmail: string;
  draftBody: string;
  draftRespondsToEmailMessage: EmailMessage;
}): DraftEmailMessage => ({
  userEmail,
  to: [draftRespondsToEmailMessage.from, ...draftRespondsToEmailMessage.to.filter((to) => to.address !== userEmail)],
  cc: draftRespondsToEmailMessage.cc.filter((cc) => cc.address !== userEmail),
  bcc: draftRespondsToEmailMessage.bcc.filter((bcc) => bcc.address !== userEmail),
  subject: draftRespondsToEmailMessage.subject,
  draftBody,
});