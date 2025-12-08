export class CriarTarefaDto {
    titulo: string; 
    descricao: string; 
    user_id: number; // ID do usuário a quem a tarefa pertence, para o relacionamento, vai ser via JWT token de autenticação
}

