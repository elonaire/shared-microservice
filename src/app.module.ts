import {MailerModule as NodeMailerModule} from '@nestjs-modules/mailer';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {FileUploadModule} from './file-upload/file-upload.module';
import {fileUploadProviders} from './file-upload/file-upload.providers';
import { MailingServiceModule } from './mailing-service/mailing-service.module';

@Module({
  imports: [
    FileUploadModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    NodeMailerModule.forRoot({
      transport: {
        host: process.env.SMTP_SERVER,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: process.env.SMTP_DEFAULT_SENDER,
      },
    }),
    MailingServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...fileUploadProviders],
})
export class AppModule {}
