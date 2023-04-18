import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { DispositivosDocumentation } from "../documentation";
import { ApiProperty } from "@nestjs/swagger";

const {ApiProperty:apiPro} = DispositivosDocumentation 
export class AddDeviceDto{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty(apiPro.addDevice.idDevice)
    idDevice: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty(apiPro.addDevice.local)
    local: string;
}