import { Module } from "@nestjs/common";
import { databaseProviders } from "src/core/database/database.providers";
import { DevicesController } from "./controllers/dispositivo.controller";
import { devicesProviders } from "./dispositivo.providers";
import { DevicesService } from "./service/dispositivo.service";

@Module({
    imports: [],
    controllers: [DevicesController],
    providers: [...databaseProviders, ...devicesProviders, DevicesService],
  })
  export class DevicesModule {}