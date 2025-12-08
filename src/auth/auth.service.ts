import { Injectable } from '@nestjs/common';
import { CadastroUsuarioAuthDto } from './dto/create-auth.dto';
import {LoginAuthDto } from './dto/login-auth.dto'; 
import { UpdateAuthDto } from './dto/update-auth.dto';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../users/entities/user.entity'; 

// type User ={ 
//   id: number; 
//   username: string; 
//   senha: string; 
//   email: string; 
// }

@Injectable()
  export class AuthService { 
    @InjectRepository(User)
    private userRepository: Repository<User>; 
  } 
  //============= Cadastro de usuario =============
//logica 
// Receber DTO

// create( cadastro: CadastroUsuarioAuthDto): {
//   const user: User =

// // Verificar se o e-mail já existe

// // Criptografar senha (com bcrypt)

// // Salvar no banco (ou lista temporária no seu caso)

// // Retornar usuário sem senha


// //============== Login de usuario =============
// // logica 




// } 




//   create(createAuthDto: CreateAuthDto) {
//     return 'This action adds a new auth';
//   }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }
