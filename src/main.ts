import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { PresentationModule } from './presentation/presentation.module';

const LISTEN_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(PresentationModule);

  const config = new DocumentBuilder()
    .setTitle('Workout TS')
    .setDescription('The Workout API made in Nest')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);


  await app.listen(process.env.PORT || LISTEN_PORT);
}
bootstrap();
