import { User } from "../entities/User";
import dataSource from "../../database/data-source";
import axios from "axios";

export class DeleteUserService{
  async execute(userId: number): Promise<Error | undefined>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOne({where: {id: userId}})
    if(!user) {
      await connection.destroy()
      return new Error('user not found')
    }

    const userEmail = user.email
    await usersRepository.delete(user)
    await connection.destroy()

    try{
      await axios.delete(`http://localhost:3000/users/${userEmail}`)
    } catch(error){
      return error?.response?.data
    } 
  }
}