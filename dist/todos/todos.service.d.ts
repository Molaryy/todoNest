import { NotFoundException } from "@nestjs/common";
import { Todo } from './interfaces/todo.interface';
export declare class TodosService {
    todos: Todo[];
    findAll(): Todo[];
    create(todo: Todo): void;
    find(id: string): Todo;
    update(id: string, todo: Todo): NotFoundException | {
        updatedTodo: number;
        todo: Todo;
    };
    delete(id: string): {
        deletedTodos: number;
        nbTodos: number;
    };
}
