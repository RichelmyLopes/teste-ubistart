import { IsIn, isNotEmpty, IsNotEmpty } from "class-validator";
import { CreateTodoDto } from "./create-todo.dto";

export class UpdateTodoDto{
  @IsNotEmpty()
  prazo: string;

  @IsNotEmpty()
  task: string;

  @IsNotEmpty()
  @IsIn([0,1])
  isDone: number;
}