import { PartialType } from '@nestjs/mapped-types';
import { CadastroUsuarioAuthDto  } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CadastroUsuarioAuthDto ) {}
