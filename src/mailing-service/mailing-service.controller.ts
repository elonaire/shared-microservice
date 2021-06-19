import { Body, Controller, Post } from '@nestjs/common';
import { MailingServiceService } from './mailing-service.service';

export interface MailDetails {
    sender?: string;
    recipient: string;
    subject: string;
    htmlBody: string;
}

@Controller('mailing-service')
export class MailingServiceController {
    constructor(
        private readonly mailerService: MailingServiceService
    ) {}

    @Post('send-mail')
    sendEMail(@Body() mailDetails: MailDetails): Promise<any> {
        return this.mailerService.sendEMail(mailDetails);
    }
}
