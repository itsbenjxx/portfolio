import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import {ConfigModule} from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
      ProjetModule,
      PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
