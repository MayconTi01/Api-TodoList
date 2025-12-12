import {BadRequestException, Injectable } from '@nestjs/common';
import { CadastroUsuarioAuthDto } from './dto/create-auth.dto';
import {LoginAuthDto } from './dto/login-auth.dto'; 
import { UpdateAuthDto } from './dto/update-auth.dto';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../users/entities/user.entity'; 
import { hash } from 'bcrypt'; 
import { JwtService } from '@nestjs/jwt';

// type User ={ 
//   id: number; 
//   username: string; 
//   senha: string; 
//   email: string; 
// }

@Injectable()
  export class AuthService { 
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


//============= Cadastro de usuario =============
  async createUser( CadastroUsuario: CadastroUsuarioAuthDto) {
    const userExiste = await this.userRepository.findOne({
    where: {
        user_email: CadastroUsuario.email
      }
    });

    if (userExiste) { 
      throw new BadRequestException('E-mail já cadastrado!');
    }
    const user = this.userRepository.create({
      user_nome: CadastroUsuario.username,
      user_email: CadastroUsuario.email,
      user_senha: String(hash(CadastroUsuario.senha, 10))  //salvar senha em hash 
    });
    return await this.userRepository.save(user);  
  } 
  //============== Login de usuario =============
//1- Verifica se email e senha existe no banco 
 async Login( LoginUser:LoginAuthDto) {
  let UserLogin = LoginUser

  const emailExiste = await this.userRepository.findOne({ 
    where:{ 
      user_email : UserLogin.email, 
     
    }  }) 
  // const senhaExiste = await this.userRepository.findOne({
  //    where: {user_senha : UserLogin.senha}})
    if (!emailExiste) return

    if (emailExiste.user_senha == LoginUser.senha) return
    return {
      accessToken: "wkajfbalwkfgla1"
    }     
}

//   Recebe email e senha.

// Busca no banco um usuário com esse email.

// Se não existir → “Usuário não encontrado.”

// Senha informada bate com a senha armazenada?

// Se não → “Senha incorreta.”

// Se sim → ok, login aprovado.

      
      //2- verifica se senha bate com a do banc}
  
 
//2- verifica se senha bate com a do banco 
//3- se tudo ok, retorna dados do usuario 
//4 -se não, retorna erro email nã ocadastrado 
  
//usuario entra com dados de cadastro (username, email, senha) 


// nome não pode ser vazio

// e-mail com formato válido

// senha com comprimento mínimo















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
