import { Module } from '@nestjs/common';
import { databaseProviders } from './orm.repository';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class OrmModule {}
