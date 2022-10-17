import { User } from "../entities/User";
import dataSource from "../../database/data-source";

interface paginateOptions{
  page: number
  per_page: number
}

export class GetAllUsersService{
  async execute({page, per_page}: paginateOptions): Promise<User[]>{

    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const users = await usersRepository.find({
      take: per_page || 4,
      skip: (page - 1) * per_page || 0
    })
    
    await connection.destroy()
    return users
  }
}