import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Tarefa } from "../../tarefas/entities/tarefa.entity";

@Entity('usuario')
export class User {
    
    @PrimaryGeneratedColumn('increment')
    id_user: number;

    @Column()
    user_nome: string;

    @Column()
    user_email: string;

    @Column()
    user_senha: string;

    @CreateDateColumn()
    user_criadoem: Date;

    // Relacionamento 1 - N (Um usuário tem várias tarefas)
    @OneToMany(() => Tarefa, (tarefa) => tarefa.user)
    tarefas: Tarefa[];
}
