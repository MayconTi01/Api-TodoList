import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { DbModule } from './db/db.module';

@Module({
imports: [TarefasModule, DbModule],
})
export class AppModule {}
