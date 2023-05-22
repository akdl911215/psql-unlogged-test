import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../prisma.service';

const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath:
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development',
});

@Module({
  imports: [CONFIG_MODULE],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
