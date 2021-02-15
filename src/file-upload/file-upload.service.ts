import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FILE_UPLOAD_REPOSITORY } from '../constants';
import { FileInfo } from './file-upload.controller';
import { File } from './file.entity';

@Injectable()
export class FileUploadService {
  constructor(
    @Inject(FILE_UPLOAD_REPOSITORY) private filesRepository: typeof File,
  ) {}
  async uploadFile(files: FileInfo[]): Promise<File[]> {
    const createdFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const createdFile = await this.filesRepository.create(file);
        console.log('createdFile', createdFile);
        createdFiles.push(createdFile);
      } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
    }

    return createdFiles;
  }
}
