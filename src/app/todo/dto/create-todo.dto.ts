import { IsIn, isNotEmpty, IsNotEmpty, IsUUID } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  prazo : string;

  @IsNotEmpty()
  @IsUUID()
  idUsuario: string;

  @IsNotEmpty()
  task: string;

  @IsNotEmpty()
  @IsIn([0,1])
  isDone: number;
}