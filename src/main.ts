import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { PresentationModule } from './presentation/presentation.module';

async function bootstrap() {
  const app = await NestFactory.create(PresentationModule);

  const config = new DocumentBuilder()
    .setTitle('Workout TS')
    .setDescription('The Workout API made in Nest')
    .setVersion('1.0')
    .addTag('workout')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);


  await app.listen(3000);
}
bootstrap();
