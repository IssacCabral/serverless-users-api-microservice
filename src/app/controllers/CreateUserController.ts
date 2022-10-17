import {Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController{
  async handle(request: Request, response: Response){
    const mandatoryData = ['name', 'cpf', 'email', 'password']
    const errors: Array<any> = []

    for(var field of mandatoryData){
      if(!request.body[field]){
        errors.push({
          field,
          message: `The ${field} is required`
        })
      }
    }

    if(errors.length > 0){
      return response.status(400).json(errors)
    }

    const createUserService = new CreateUserService()
    const result = await createUserService.execute(request.body)

    return result instanceof Error ? response.status(400).json(result.message) : response.status(201).json(result)
  }
}