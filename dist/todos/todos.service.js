"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = exports.TodosService = class TodosService {
    constructor() {
        this.todos = [
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
    }
    findAll() {
        return this.todos;
    }
    create(todo) {
        let checkIdRepetition = true;
        if (!todo)
            return;
        this.todos.forEach((findTodo) => {
            if (findTodo.id == todo.id) {
                checkIdRepetition = false;
            }
        });
        if (checkIdRepetition) {
            this.todos = [...this.todos, todo];
        }
    }
    find(id) {
        return this.todos.find((todo) => todo.id === Number(id));
    }
    update(id, todo) {
        const todoToUpdate = this.todos.find((findTodo) => findTodo.id === +id);
        if (!todoToUpdate) {
            return new common_1.NotFoundException("Id don't match with any todo");
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
        const updatedTodos = this.todos.map((findTodo) => findTodo.id !== +id ? findTodo : todoToUpdate);
        this.todos = [...updatedTodos];
        return { updatedTodo: 1, todo: todoToUpdate };
    }
    delete(id) {
        const nbOfTodosBeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter((findTodo) => findTodo.id !== +id)];
        if (this.todos.length < nbOfTodosBeforeDelete) {
            return { deletedTodos: 1, nbTodos: this.todos.length };
        }
        else {
            return { deletedTodos: 0, nbTodos: this.todos.length };
        }
    }
};
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map