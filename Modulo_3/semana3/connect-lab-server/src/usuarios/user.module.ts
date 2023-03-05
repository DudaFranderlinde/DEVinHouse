import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { databaseProviders } from 'src/core/database/database.providers';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';
import { userProviders } from './user.providers';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...databaseProviders, ...userProviders, UserService, JwtService],
})
export class UserModule {}