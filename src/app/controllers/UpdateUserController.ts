import { Request, Response } from "express";
import { UpdateUserInput } from "../services/dtos/UpdateUserDTO";
import { UpdateUserService } from "../services/UpdateUserService";
import { validate } from "class-validator";

export class UpdateUserController{
  async handle(request: Request, response: Response){
    const userId = Number(request.params['userId'])
    
    const {name, cpf, email, password} = request.body

    const updateUserInput = new UpdateUserInput()
    updateUserInput.name = name
    updateUserInput.cpf = cpf
    updateUserInput.email = email
    updateUserInput.password = password

    const validationResult = await validate(updateUserInput)
    const validationErrors: Array<any> = []

    if(validationResult.length > 0){
      for(var err of validationResult){
        validationErrors.push({errorMessage: err.constraints})
      }
      return response.status(400).json(validationErrors)
    }

    const updateUserService = new UpdateUserService()
    const result = await updateUserService.execute(userId, request.body)

    return result instanceof Error ? response.status(400).json(result.message) : response.status(200).json(result)
  }
}