import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity'; 
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])], // registra a entidade Tarefa no modulo de tarefas 
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
