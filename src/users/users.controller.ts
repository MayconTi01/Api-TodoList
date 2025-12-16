import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';


/// 3 funcionalidades: Atualizar nome, Atualizar senha, Consultar dados pessoais
// 2 rotas post e 1 get 

///logica 
 // criar Controller rota perfil 
 // 
@Controller('/Users/perfil')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}

//================ Consultar dados pessoais ==================
// @Get('/me')
//   async findAll(){ 
//     return this.usersService.findAll();
// }
// //========================= Atualizar nome ==========================
// @Patch('/atualizar-nome')  
//   async update(@Body() atualiza_senha: CreateUserDto)
// { 
//   return this.usersService.update(+atualiza_senha., atualiza_senha);
// }
  

// //========================= Atualizar senha ==========================
// @Patch('/atualizar-senha')  
 
}

















  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

