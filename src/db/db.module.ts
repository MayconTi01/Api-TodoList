import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [ 
        TypeOrmModule.forRoot ({ 
            type: 'postgres', 
            host :'localhost', 
            port: 5432, 
            username: 'postgres', 
            password: '1234', 
            database: 'To-do list banco', 
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            
        })
        }
    ]
})
export class DbModule {}
