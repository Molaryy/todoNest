import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { TodoDTO } from './DTO/create-todo.dto';

/*
 - localhost:3000/todos
 - readonly c'set parcque on sait que ça va pas être modifié
 - Body nous permets de récupère le body qui a été dans le serveur
 - Param c'est poue récupérer le paramètre qu'on  donne du genre /todos/param
*/

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todosService.find(id);
  }

  @Post()
  createTodo(@Body() newTodo: TodoDTO) {
    console.log(newTodo);
    return this.todosService.create(newTodo);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: TodoDTO) {
    return this.todosService.update(id, todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
