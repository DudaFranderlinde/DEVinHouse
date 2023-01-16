import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.providers';
import { TwitterModule } from './twitter/twitter.module';
import { twitterProviders } from './twitter/twitter.providers';

@Module({
  imports: [
      ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
      TwitterModule
  ],
  controllers: [],
  providers: [...databaseProviders, ...twitterProviders],
})
export class AppModule {}
