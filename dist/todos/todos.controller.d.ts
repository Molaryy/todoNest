import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { TodoDTO } from './DTO/create-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Todo[];
    findById(id: string): Todo;
    createTodo(newTodo: TodoDTO): void;
    updateTodo(id: string, todo: TodoDTO): import("@nestjs/common").NotFoundException | {
        updatedTodo: number;
        todo: Todo;
    };
    deleteTodo(id: string): {
        deletedTodos: number;
        nbTodos: number;
    };
}
