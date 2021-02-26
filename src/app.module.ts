import {MailerModule} from '@nestjs-modules/mailer';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {FileUploadModule} from './file-upload/file-upload.module';
import {fileUploadProviders} from './file-upload/file-upload.providers';

@Module({
  imports: [
    FileUploadModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ...fileUploadProviders],
})
export class AppModule {}
