import dataSource from "../../database/data-source";
import { User } from "../entities/User";

export class GetUserByIdService{
  async execute(userId: number): Promise<User | Error>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOne({where: {id: userId}})
    if(!user) {
      await connection.destroy()
      return new Error('user not found')
    }
    await connection.destroy()
    return user
  }
}