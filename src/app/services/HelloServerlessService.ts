import dataSource from "../../database/data-source";
import { User } from "../entities/User";

export class HelloServelessService{
  async execute(authenticatedUserEmail: string): Promise<Error | string>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOne({where: {email: authenticatedUserEmail}})
    if(!user) {
      await connection.destroy()
      return new Error('User not found, please login again')
    } 

    await connection.destroy()
    return user.name
  }
}