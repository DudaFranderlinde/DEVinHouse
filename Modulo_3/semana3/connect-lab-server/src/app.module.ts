import { Module } from '@nestjs/common';
import { UserModule } from './usuarios/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { databaseProviders } from './core/database/database.providers';
import { userProviders } from './usuarios/user.providers';
import { AuthService } from './core/auth/service/auth.service';
import { JwtStrategy } from './core/auth/guard/jwt.strateegy';
import { DevicesModule } from './dispositivos/dispositivos.module';
import { devicesProviders } from './dispositivos/dispositivo.providers';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 6
      }
    }), UserModule, DevicesModule],
  controllers: [AppController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...devicesProviders,   
    AuthService,
    JwtStrategy
  ],
})
export class AppModule {}
