import { Injectable } from '@nestjs/common';
import { CriarTarefaDto} from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { treemap } from 'mermaid/dist/diagrams/treemap/detector.js';


//============ Definição do tipo Tarefa =============
type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  criadoEm: Date;
}
//============ Fim da definição do tipo Tarefa =============
@Injectable()
export class TarefasService {
  private tarefasLista: Tarefa[] = [] ;
  private contadorId: number = 1;

//================ Criar tarefa ===============  

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

//=============== Listar Tarefas ============
// Listar todas as tarefas 
// retornar todas as tarefas já criadas
// sem alterar nada
// apenas ler os dados da memória

findAll(): Tarefa[] { 
  return this.tarefasLista; 
}

//============= Listar tarefa pro ID  ===========
//listar tarefas por id
// Receber o id da tarefa
findOne(id: Tarefa["id"]): Tarefa | null {
  const tarefa = this.tarefasLista.find(tarefa => tarefa.id === id);
  if (!tarefa) return null;
  return tarefa;
}


//================ Editar Tarefa ============
update(id:Tarefa["id"], atualizaTarefa: UpdateTarefaDto): Tarefa | undefined { 
  const tarefa = this.tarefasLista.find(tarefas => tarefas.id === id);

  
  if(atualizaTarefa.titulo !== undefined){
    tarefa!.titulo = atualizaTarefa.titulo;
  }

  if(atualizaTarefa.descricao !== undefined){
    tarefa!.descricao = atualizaTarefa.descricao;
  }

  return tarefa;
}

// ================ Excluir Tarefa ===========

//Receber o ID
remove(id: Tarefa["id"]) {
  const tarefa = this.tarefasLista;
  const index = this.tarefasLista.findIndex(tarefa => tarefa.id === id); 
  if(index !== -1 ){ 
    const tarefaRemovida = this.tarefasLista.splice(index, 1)[0]
    return tarefa;
  //return console.log(`Sua tarefa foi removida:${tarefaRemovida}`); 
  }else { 
    return undefined;
  }
}   
} 
// Procurar dentro da lista se a tarefa existe

// Se não existir → retornar undefined ou erro

// Se existir → remover da lista

// Retornar algo (ex.: a tarefa removida, ou mensagem)




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

