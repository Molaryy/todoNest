import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'Create a NestJS todos app',
      done: false,
    },
    {
      id: 2,
      title: 'croissant',
      description: 'Buy a croissant',
      done: true,
    },
    {
      id: 3,
      title: 'buy pc',
      description: 'go to the fnac to buy a new PC',
      done: false,
    },
  ];
  findAll(): Todo[] {
    return this.todos;
  }
  create(todo: Todo): void {
    let checkIdRepetition = true;

    if (!todo) return;
    this.todos.forEach((findTodo: Todo) => {
      if (findTodo.id == todo.id) {
        checkIdRepetition = false;
      }
    });
    if (checkIdRepetition) {
      this.todos = [...this.todos, todo as Todo];
    }
  }
  find(id: string): Todo {
    return this.todos.find((todo) => todo.id === Number(id));
  }

  update(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find((findTodo) => findTodo.id === +id);

    if (!todoToUpdate) {
      return new NotFoundException("Id don't match with any todo");
    }

    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map((findTodo) =>
      findTodo.id !== +id ? findTodo : todoToUpdate,
    );
    this.todos = [...updatedTodos];
    return { updatedTodo: 1, todo: todoToUpdate };
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter((findTodo) => findTodo.id !== +id)];
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
