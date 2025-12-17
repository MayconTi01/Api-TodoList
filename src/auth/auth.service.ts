import {BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CadastroUsuarioAuthDto } from './dto/create-auth.dto';
import {LoginAuthDto } from './dto/login-auth.dto'; 
import { UpdateAuthDto } from './dto/update-auth.dto';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../users/entities/user.entity'; 
import { hash, compare } from 'bcrypt'; 
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
    private jwtService: JwtService
  ) {}


//============= Cadastro de usuario =============  O K
  async createUser( CadastroUsuario: CadastroUsuarioAuthDto) {
    try {
      const userExiste = await this.userRepository.findOne({
    where: {
        user_email: CadastroUsuario.email
      }
    });

    const senhaHash = await hash(CadastroUsuario.senha, 10)
    const user = this.userRepository.create({
      //id_user: 1, 
      user_nome: CadastroUsuario.username,
      user_email: CadastroUsuario.email,
      user_senha:senhaHash, //salvar senha em hashm
      user_criadoem: new Date(),
      // tarefas: []
     
    });
    //console.log('usuario', user)
    const save = await this.userRepository.save(user);
    console.log('salve', save)
    return save; 
    } catch (error) {
      console.log("erro:",error)
    }
  } 
  //============== Login de usuario =============
//1- Verifica se email e senha existe no banco 

// Receber email e senha

// Buscar usuário pelo email

// Comparar senha com bcrypt
 
// Se inválido → erro
                         
// Se válido → gerar token JWT
                     
// Retornar token
                         

 async Login( LoginUser:LoginAuthDto) {
    let UserLogin = LoginUser

    const user = await this.userRepository.findOne({ 
      where:{ 
        user_email : UserLogin.email,  //1 
      
      }  }) 

      console.log(LoginUser)
    // const senhaExiste = await this.userRepository.findOne({
    //    where: {user_senha : UserLogin.senha}})
      if (!user) {  
        throw new UnauthorizedException('Email ou senha inválidos');
      } 
      const senhaValida = await compare(
        LoginUser.senha,
        user.user_senha)  
        
       if (!senhaValida){ 
        throw new UnauthorizedException('Email ou senha inválidos'); } 

      const payload = { sub: user?.id_user, username: user?.user_nome };
      return { 
        access_token: await this.jwtService.signAsync(payload),
      };   
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
