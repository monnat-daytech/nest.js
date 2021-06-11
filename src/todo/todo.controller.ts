import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){

    }

    @Get()
    getTodos(){
        return this.todoService.getTodo()
    }

    @Post()
    postTodo(@Body("title") title:string, @Body("subtitle") subtitle:string){
        this.todoService.addTodo(title,subtitle)
    }

    @Delete("/:id/:role")
    deleteTodoById(@Param("id")id:string , @Param("role")role:string){
        console.log(`id: ${id} , role: ${role}`)
        return this.todoService.removeTodoById(id)
    }
}
