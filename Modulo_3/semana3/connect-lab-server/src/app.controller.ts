import { Body, Controller,Post, ValidationPipe, UseGuards, Get, Request, HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { CredentialsDTO } from './core/auth/dto/credentials.dto';
import { JwtAuthGuard } from './core/auth/guard/jwt-auth.guard';
import { AuthService } from './core/auth/service/auth.service';
import { CreateAddressDto } from './usuarios/dto/createAddress.dto';
import { CreateUserDTO } from './usuarios/dto/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/auth/me')
  async me(@Request() req) {
    return req.user;
  }

  @Post('/auth/signup')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO, @Body('endereco') createAddressDto: CreateAddressDto) {
    const user = await this.authService.signUp(createUserDto, createAddressDto);

    if(user == null){
      throw new HttpException(`Informação inválida! Email já cadastrado`, HttpStatus.CONFLICT)
    }
    
    return {
      message: 'Cadastro realizado.'
    }
  }

  @Post('/auth/signin')
  async signIn(@Body(ValidationPipe) credentialsDto: CredentialsDTO) {
    return await this.authService.signIn(credentialsDto);
  }
}