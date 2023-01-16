import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.providers';
import { TwitterModule } from './twitter/twitter.module';
import { twitterProviders } from './twitter/twitter.providers';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './core/auth/auth.service';
import { JwtStrategy } from './core/auth/guard/jwt.strateegy';
import { AppController } from './app.controller';


@Module({
  imports: [
      ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: 60 * 6
        }
      }),
      TwitterModule
  ],
  controllers: [AppController],
  providers: [...databaseProviders, ...twitterProviders, AuthService, JwtStrategy],
})
export class AppModule {}
