import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { TwitterController } from './twitter.controller';
import { twitterProviders } from './twitter.providers';
import { TwitterService } from './twitter.service';

@Module({
  imports: [],
  controllers: [TwitterController],
  providers: [...databaseProviders, ...twitterProviders, TwitterService],
})
export class TwitterModule {}