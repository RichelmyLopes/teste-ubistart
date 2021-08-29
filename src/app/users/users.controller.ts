import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async index() {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.usersService.create(body);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async show(@Param('id', new ParseUUIDPipe()) id : string) {
    return await this.usersService.findOneOrFail({id});
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id', new ParseUUIDPipe()) id : string, @Body() body: UpdateUserDto) {
    return await this.usersService.update(id, body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  async destroy(@Param('id', new ParseUUIDPipe()) id : string) {
    await this.usersService.destroy(id);
  }
}
