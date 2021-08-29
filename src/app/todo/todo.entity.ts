import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'todos'})
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'id_usuario', type: 'uuid'})
  idUsuario: string;

  @Column()
  task: string;

  @Column({name: 'is_done', type: 'tinyint', width: 1})
  isDone: number;

  @Column({type: Date})
  prazo: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: string;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string;
}