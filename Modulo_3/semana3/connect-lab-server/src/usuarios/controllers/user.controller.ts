import { Controller, Get, Request, Res, HttpStatus, HttpException, UseGuards, Patch, Body } from '@nestjs/common'
import { Response } from 'express';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { UpdatePasswordDto } from '../dto/updatePassword.dto';
import { UserEntity } from '../entities/usuario.entity';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsuariosDocumentantion } from '../documentation';

const {ApiOperation:apiOpe, ApiResponse:apiRes}= UsuariosDocumentantion

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(private service: UserService){}

    @ApiOperation(apiOpe.profile)
    @ApiResponse(apiRes.profile.Success)
    @ApiResponse(apiRes.profile.NotFound)
    @Get('profile')
    async me(@Request() req, @Res() response: Response): Promise<UserEntity> {
      try {
        const user = await this.service.findMe(req.user.id)
       
        if (user) {
          response.status(HttpStatus.OK).send(user)
          return user
        }

        response.status(HttpStatus.OK).send(`message:{Nenhum usuário encontrado com o ID ${req.user.id}}`)
      } catch (error) {
        throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
      }

        
    } 

    @ApiResponse(apiRes.updatePassword.Success)
    @ApiResponse(apiRes.updatePassword.NotFound)
    @ApiOperation(apiOpe.updatePassword)
    @Patch('updatePassword')
    async update(@Request() req, @Body() user: UpdatePasswordDto, @Res() response: Response){
      try {
        const userUpdate = await this.service.updatePassword(req.user.id, user)

        if(userUpdate){
          response.status(HttpStatus.OK).send({message: `Senha atualizada com sucesso!`})
          return 
        }

        if(!userUpdate){
        return response.status(HttpStatus.NOT_FOUND).send({message:`Informações inválidas!`})
        }
        response.status(HttpStatus.NOT_FOUND).send({message:`Nenhum usuário encontrado com o ID ${req.user.id}`})
        
      } catch (error) {
        
        throw new HttpException({ reason: error?.detail }, HttpStatus.BAD_REQUEST)
      }
    }
  }