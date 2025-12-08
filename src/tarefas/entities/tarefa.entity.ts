import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('tarefas')
export class Tarefa {

    @PrimaryGeneratedColumn('increment')
    tarefa_id: number;

    @Column()
    tarefa_titulo: string;

    @Column()
    tarefa_descricao: string;

    @CreateDateColumn()
    tarefa_criadoEm: Date;

    // Muitas tarefas pertencem a um usuário
    @ManyToOne(() => User, (user) => user.tarefas)
    @JoinColumn({ name: 'user_id' })  // cria a coluna user_id automaticamente
    user: User;
}
