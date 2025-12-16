import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CriarTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';


// 1- são dados associados aos métodos https
// 2- Necessidade de puxar o Body da requisição
// 3- Dtos são 2 arquivos para Create outro para Update 
// 4- Post - usa arquivo DTO create, Patch - usa arquivo Update 
// 5- Get e Delete - Não utilizam arquivos DTO, pois não recebe body
 




@Controller('tarefas')
export class TarefasController {
    constructor(private readonly tarefasService: TarefasService) {} 

//================ Criar tarefa ================
// @Post()
// async create(@Body() NovaTarefa: CriarTarefaDto) { 
//     return this.tarefasService.create(NovaTarefa);
// }
// //==================Listar todas as Tarefas =================
// @Get() // rota metodo Get 
// async findAll(){   // metodo fildAll - lista todas as tarefas 
//     return this.tarefasService.findAll(); // chama o service para listar todas as tarefas
// }  
// // ======================= Listar tarefa por id  ========================
// @Get(':id')
// async findOne(@Param('id')id:string){ 
//     return this.tarefasService.findOne(+id)
// }

// //========================= Editar tarefa ==========================
// @Patch(':id') // 1: metodo HTTP, 2: rota com parametro dinamico 
// async update(@Param('id') id: string, @Body() dadosAtualizados: UpdateTarefaDto) {
//     return this.tarefasService.update(+id, dadosAtualizados);
// } 

// // ================================ Excluir tarefa ========================
// @Delete(':id')
// remove(@Param('id') id: string) {
//     return this.tarefasService.remove(+id); 
// }

} 

// Marcar como concluída














//   @Post()
//   create(@Body() createTarefaDto: CreateTarefaDto) {
//     return this.tarefasService.create(createTarefaDto);
//   }

//   @Get()
//   findAll() {
//     return this.tarefasService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.tarefasService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
//     return this.tarefasService.update(+id, updateTarefaDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.tarefasService.remove(+id);
//   }
// }
