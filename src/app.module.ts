import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { fileUploadProviders } from './file-upload/file-upload.providers';

@Module({
  imports: [FileUploadModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ...fileUploadProviders],
})
export class AppModule {}
