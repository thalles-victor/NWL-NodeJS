import { SendMailEntity } from "./MailAdapter.Entity";

export interface MailAdapterContract {
  sendMail: (data: SendMailEntity) => Promise<void>;
}