import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import {ConfigModule} from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
      ProjetModule,
      PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
