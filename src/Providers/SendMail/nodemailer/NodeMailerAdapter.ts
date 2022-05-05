import nodemailer from 'nodemailer';
import { MailAdapterContract } from '../Core/MailAdapter.Contract';
import { SendMailEntity } from '../Core/MailAdapter.Entity';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5de4075c125aa7",
    pass: "9f6b172a338af0",
  }
});

export class NodeMailerAdapter implements MailAdapterContract {
  async sendMail(data: SendMailEntity){
    await transport.sendMail({
      from: process.env.TO_SEND_MAIL,
      to: process.env.FROM_SEND_MAIL,
      subject: data.subject,
      html: data.body
    });
  }
}