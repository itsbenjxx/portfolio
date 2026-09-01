import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProjetModule} from './projet/projet.module';
import {ConfigModule} from "@nestjs/config";
import {PrismaModule} from "./prisma/prisma.module";
import {ContactModule} from './contact/contact.module';
import {CacheModule} from "@nestjs/cache-manager";
import {redisStore} from "cache-manager-redis-yet";

@Module({
    imports: [
        ProjetModule,
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ContactModule,
        CacheModule.register({
            isGlobal: true,
            ttl: 86400000,
            max: 100,
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
