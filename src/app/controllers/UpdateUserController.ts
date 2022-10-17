import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController{
  async handle(request: Request, response: Response){
    const userId = Number(request.params['userId'])
    
    const updateUserService = new UpdateUserService()
    const result = await updateUserService.execute(userId, request.body)

    return result instanceof Error ? response.status(400).json(result.message) : response.status(200).json(result)
  }
}