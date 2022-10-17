import { UpdateUserDTO } from "./dtos/UpdateUserDTO";
import { User } from "../entities/User";
import dataSource from "../../database/data-source";
import { Repository } from "typeorm";

export class UpdateUserService {
  async execute(userId: number, data: UpdateUserDTO): Promise<User | Error> {
    const connection = await dataSource.initialize();
    const usersRepository = connection.getRepository(User);

    const user = await usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      await connection.destroy();
      return new Error("user not found");
    }

    const validate = await this.checkIfExistsDuplicateUniqueField(userId, data, usersRepository)
    if(validate instanceof Error){
      await connection.destroy()
      return validate
    }

    await usersRepository.update({id: userId}, {...data})

    const updatedUser = usersRepository.create({...user, ...data})
    const userWithoutPassword: User = {...updatedUser, password: undefined as any}

    await connection.destroy()
    return userWithoutPassword
  }

  private async checkIfExistsDuplicateUniqueField(userId: number, data: UpdateUserDTO, repository: Repository<User>){
    if(Object.keys(data).includes('cpf')){
        const user = await repository.findOneBy({cpf: data.cpf})
        if((user) && (user.id != userId)) return new Error('the cpf must be unique')
    }
    if(Object.keys(data).includes('email')){
        const user = await repository.findOneBy({email: data.email})
        if((user) && (user.id != userId)) return new Error('the email must be unique')
    }
  }

}
