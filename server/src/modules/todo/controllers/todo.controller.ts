import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { AddTodoTaskDto } from '../dto/create-todo.dto';
import { TodoService } from '../service/todo.service';

@Controller('/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async addTodo(@Body() addTodoTaskDto: AddTodoTaskDto) {
    const todo = await this.todoService.createTodo(addTodoTaskDto);
    console.log(todo);
    return todo;
  }

  @Get(':todoid')
  async findOneTodo(@Param('todoid') todoid) {
    const todo = await this.todoService.findOne(todoid);
    return todo;
  }

  @Get()
  async findAll() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  @Patch()
  async toggleTodo(@Query() query) {
    const todo = await this.todoService.toggleTodo(query.todoid);
    return todo.completed;
  }

  @Delete()
  async deleteTodo(@Query() query) {
    const todo = await this.todoService.deleteTodo(query.todoid);
    console.log('Удалён элемент с id: ' + query.todoid);
    return todo;
  }
}
