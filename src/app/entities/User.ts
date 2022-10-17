import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm'
import { hashPasswordTransform } from './hashPasswordTransform'

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  cpf: string

  @Column()
  email: string

  @Column({
    select: false,
    transformer: hashPasswordTransform
  })
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}