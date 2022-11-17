import { Module } from '@nestjs/common';
import { CervejaController } from './cerveja/cerveja.controller';
import { CervejaService } from './cerveja/cerveja.service';
import { Database } from './database/database';

@Module({
  imports: [],
  controllers: [CervejaController],
  providers: [CervejaService, Database]
})
export class AppModule {}
