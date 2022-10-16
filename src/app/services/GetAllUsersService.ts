import { User } from "../entities/User";
import dataSource from "../../database/data-source";

export class GetAllUsersService{
  async execute(): Promise<User[]>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)
    const users = await usersRepository.find()
    await connection.destroy()
    return users
  }
}