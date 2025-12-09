import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

// POST → envia dados para criar

// GET → consulta dados

// PATCH → atualiza parte dos dados

// PUT → atualiza tudo (quase nunca usamos)

// DELETE → deleta algo


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

//funcionalidades: Cadastro, Login, atualizar dados do usuario 

//================= Cadastro de Usuario ==================

@Post('cadastro')
  create(@Body() CadastroUserio: CreateAuthDto) { 
    return this.authService.create(CadastroUserio); 
  }
//================= Login de Usuario ==================
@Post('login') // rota para login: metodo post 
  login(@Body() loginDto: LoginAuthDto) {
    return this.authService.login(loginDto);
  } 
//================= Esqueci minha senha
@Patch('esqueci-senha')
  
//   @Post()
//   create(@Body() createAuthDto: CreateAuthDto) {
//     return this.authService.create(createAuthDto);
//   }

//   @Get()
//   findAll() {
//     return this.authService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     console.log('Fetching auth with id:', id);
//     return this.authService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
//     return this.authService.update(+id, updateAuthDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.authService.remove(+id);
//   }
// }
