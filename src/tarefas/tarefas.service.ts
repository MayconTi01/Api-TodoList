import { Injectable } from '@nestjs/common';
import { CriarTarefaDto} from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { treemap } from 'mermaid/dist/diagrams/treemap/detector.js';

type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  criadoEm: Date;
}
@Injectable()
export class TarefasService {
  private tarefasLista: Tarefa[] = [] ;
  private contadorId: number = 1;

//Criar tarefa
//“Pegar dados → montar objeto da tarefa → armazenar → retornar”.
//1 Receber o CriarTarefaDto com título e descrição.
create(NovaTarefa:CriarTarefaDto): Tarefa[] { 

  const tarefa: Tarefa = { 
    id: this.contadorId++, 
    titulo: NovaTarefa.titulo, 
    descricao: NovaTarefa.descricao, 
    concluida: false, 
    criadoEm: new Date() 
  } 

  this.tarefasLista.push(tarefa);

  return this.tarefasLista   
}
// Listar todas as tarefas 
// retornar todas as tarefas já criadas
// sem alterar nada
// apenas ler os dados da memória

findAll(): Tarefa[] { 
  return this.tarefasLista; 
}

//listar tarefas por id
// Receber o id da tarefa
findOne(id: Tarefa["id"]): Tarefa | null {
  const tarefa = this.tarefasLista.find(tarefa => tarefa.id === id);
  if (!tarefa) return null;
  return tarefa;
}

update(id:Tarefa["id"], atualizaTarefa: UpdateTarefaDto): Tarefa | undefined { 
  const tarefa = this.tarefasLista.find(tarefas => tarefas.id === id);
  
  if (tarefa?.titulo) {
    tarefa.titulo = atualizaTarefa.titulo!
  } 

  if (tarefa?.descricao) {
    tarefa.descricao = atualizaTarefa.descricao!
  }

  return tarefa
}


//✔ 1. Receber o ID da tarefa
// ✔ 2. Receber os dados atualizados (DTO)
// ✔ 3. Buscar a tarefa existente
// ✔ 4. Atualizar SOMENTE os campos enviados no DTO
// ✔ 5. Retornar a tarefa atualizada

// Procurar dentro de tarefasLista

// Retornar a tarefa encontrada

// Caso não exista → retornar um erro (boa prática)



// Gerar um ID (temporário, já que você ainda não tem banco).
// Criar um objeto que represente a tarefa, incluindo:
// id
// titulo
// descricao
// concluida: false
// criadoEm: data atual
// Salvar este objeto na sua estrutura (array por enquanto).
// Retornar a nova tarefa criada.






//   create(createTarefaDto: CreateTarefaDto) {
//     return 'This action adds a new tarefa';
//   }

//   findAll() {
//     return `This action returns all tarefas`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} tarefa`;
//   }

//   update(id: number, updateTarefaDto: UpdateTarefaDto) {
//     return `This action updates a #${id} tarefa`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} tarefa`;
//   }
// 
}
