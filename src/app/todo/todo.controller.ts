import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('allTasks/:id_user')
  @UseGuards(AuthGuard('jwt'))
  async index(@Param('id_user', new ParseUUIDPipe()) id_user: string) {
    return await this.todoService.findAll(id_user);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.todoService.findOneOrFail(id);
  }


  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id', new ParseUUIDPipe()) id : string, @Body() body: UpdateTodoDto) {
    return this.todoService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.todoService.deleteById(id);
  }


}
