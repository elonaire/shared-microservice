import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailDetails } from './mailing-service.controller';

@Injectable()
export class MailingServiceService {
  constructor(private readonly nodeMailerService: MailerService) {}
  async sendEMail(mailDetails: MailDetails): Promise<any> {
    try {
      const { recipient, subject, htmlBody, sender } = mailDetails;
      const response = await this.nodeMailerService.sendMail({
        to: recipient, // list of receivers
        from: sender ? sender : process.env.SMTP_DEFAULT_SENDER, // sender address
        subject: subject, // Subject line
        // text: 'welcome', // plaintext body
        html: htmlBody, // HTML body content
      });

      return response;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
