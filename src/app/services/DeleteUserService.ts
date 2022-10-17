import { User } from "../entities/User";
import dataSource from "../../database/data-source";

export class DeleteUserService{
  async execute(userId: number): Promise<Error | undefined>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOne({where: {id: userId}})
    if(!user) {
      await connection.destroy()
      return new Error('user not found')
    }

    await usersRepository.delete(user)
    await connection.destroy()
  }
}