import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoController } from './controllers/todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
