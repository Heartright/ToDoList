import { TodoItem } from '../interfaces/todo.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [];
  async createTodo(todo): Promise<TodoItem[]> {
    this.todos.push({
      id: Math.floor(Math.random() * 1000),
      ...todo,
      completed: false,
    });
    return this.todos;
  }

  async findOne(todoid): Promise<TodoItem> {
    let id = Number(todoid);
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return todo;
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todos;
  }

  async toggleTodo(todoid): Promise<TodoItem> {
    let id = Number(todoid);
    let index = this.todos.findIndex((todoid) => todoid.id === id);
    if (index === -1) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    } else if (this.todos[index].completed === false) {
      this.todos[index].completed = true;
    } else this.todos[index].completed = false;
    return this.todos[index];
  }
  async deleteTodo(todoid): Promise<TodoItem> {
    let id = Number(todoid);
    let index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    this.todos.splice(index, 1);
    return this.todos[index];
  }
}
