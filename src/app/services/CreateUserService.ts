import { User } from "../entities/User";
import { CreateUserDTO } from "./dtos/CreateUserDTO";
import dataSource from "../../database/data-source";
import axios from 'axios'
import env from "../../config/env";

export class CreateUserService{
  async execute(data: CreateUserDTO): Promise<User | Error>{
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)
    
    const userByCpfAlreadyExists = await usersRepository.findOne({where: {cpf: data.cpf}}) 
    if(userByCpfAlreadyExists){
      await connection.destroy()
      return new Error('cpf duplicated')
    } 

    const userByEmailAlreadyExists = await usersRepository.findOne({where: {email: data.email}})
    if(userByEmailAlreadyExists){
      await connection.destroy()
      return new Error('email duplicated')
    } 

    const user = usersRepository.create(data)
    await usersRepository.save(user)

    await connection.destroy()

    try{
      const createUserOnAuthMicroservice = await axios.post(`${env.AUTH_SERVICE_URL}/users`, {email: data.email, password: data.password})
    } catch(error){
      return error?.response?.data
    } 

    const userWithoutPassword: User = {...user, password: undefined as any}

    return userWithoutPassword
  }
}