import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TarefasModule, 
        DbModule, 
        AuthModule
    ],
})
export class AppModule {}


