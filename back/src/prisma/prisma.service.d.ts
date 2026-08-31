import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'prisma-client-81e7111abb119a6832c40ba3f9f7f06f354ed92043f4ad50b18cfb16bd5d6bdf/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
