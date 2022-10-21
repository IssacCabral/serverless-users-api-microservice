import {Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'
import { CreateUserInput } from '../services/dtos/CreateUserDTO'
import { validate } from 'class-validator'

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

    const {name, cpf, email, password} = request.body

    const createUserInput = new CreateUserInput()
    createUserInput.name = name
    createUserInput.cpf = cpf
    createUserInput.email = email
    createUserInput.password = password

    const validationResult = await validate(createUserInput)
    const validationErrors: Array<any> = []

    if(validationResult.length > 0){
      for(var err of validationResult){
        validationErrors.push({errorMessage: err.constraints})
      }
      return response.status(400).json(validationErrors)
    }

    const createUserService = new CreateUserService()
    const result = await createUserService.execute(request.body)

    return result instanceof Error ? response.status(400).json({message: result.message}) : response.status(201).json(result)
  }

}