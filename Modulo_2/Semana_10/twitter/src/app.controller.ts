import { Body, Controller,Post, ValidationPipe, UseGuards, Get, Request, HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from './core/auth/auth.service';
import { CredentialsDTO } from './core/auth/dto/credential.dto';
import { JwtAuthGuard } from './core/auth/guard/jwt-auth.guard';
import { CreateUserDTO } from './twitter/dto/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/auth/me')
  async me(@Request() req) {
    return req.user;
  }

  @Post('/auth/signup')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    const user = await this.authService.signUp(createUserDto);

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