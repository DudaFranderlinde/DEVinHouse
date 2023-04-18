import { Controller, UseGuards, Get, Query, Res, HttpStatus, HttpException, Request, Patch, Body, Param } from '@nestjs/common'
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { response, Response } from 'express';
import { DevicesService } from '../service/dispositivo.service';
import { DispositivosEntity } from '../entities/dispositivo.entity';
import { AddDeviceDto } from '../dto/addDevice.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DispositivosDocumentation } from '../documentation';

const {ApiOperation:apiOpe} = DispositivosDocumentation

ApiTags('devices')
@Controller('devices')
@UseGuards(JwtAuthGuard)
export class DevicesController{
    constructor(
        private service: DevicesService
    ){}

    @ApiOperation(apiOpe.getDetails)
    @ApiQuery({name: 'id'})
    @Get('/detail')
    async getDetails(@Query('id') id: number, @Res() response: Response): Promise<DispositivosEntity>{
        try {
            const device = await this.service.findOne(id)

            if (device == null) {
                response.status(HttpStatus.OK).send(`Nenhum usuário encontrado com o ID ${id}`)
                return
            }

          response.status(HttpStatus.OK).send(device)
            
        } catch (error) {
            throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
            
        }
    }

    @ApiOperation(apiOpe.getAll)
    @ApiQuery({name: 'local'})
    @Get('userDevices')
    async getAll(@Query('local') local: string, @Request() req, @Res() response: Response): Promise<DispositivosEntity>{
        try {
            const devices = await this.service.findAll(local, req.user.id)
            response.status(HttpStatus.OK).send(devices)

            return
        } catch (error) {
            throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
            
        }
    }

    @ApiOperation(apiOpe.addDevice)
    @Patch('addDeviceUser')
    async addDevice(@Body() info: AddDeviceDto, @Request() req, @Res() response: Response){
        try {
            const {local, idDevice } = info
            const addDevice = await this.service.addDevice(local, req.user.id, idDevice)
            
            if(addDevice){
            response.status(HttpStatus.OK).send({message: "Dispositivo vinculado com sucesso!"})

            }
        } catch (error) {
            throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
            
        }
    }
}