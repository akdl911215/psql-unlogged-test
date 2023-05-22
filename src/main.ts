import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const SERVER_HOST: string = configService.get<string>('HOST');
  const SERVER_PORT: number = configService.get<number>('PORT');

  await app.listen(SERVER_PORT, () =>
    console.log(`${SERVER_HOST}:${SERVER_PORT}`),
  );
}
bootstrap();
