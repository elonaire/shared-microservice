import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

const customOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customSiteTitle: 'Shared Service',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Shared service')
    .setDescription('Shared microservice that includes features like mailing service, file upload service, payment gateways.')
    .setVersion('1.0')
    .addTag('Shared')
    .addBearerAuth({ in: 'header', type: 'http' }, 'Authorization')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document, customOptions);
  await app.listen(3000);
}
bootstrap();
