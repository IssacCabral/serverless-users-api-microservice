import {Request, Response} from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

export class DeleteUserController{
  async handle(request: Request, response: Response){
    const {userId} = request.params

    const deleteUserService = new DeleteUserService()
    const result = await deleteUserService.execute(Number(userId))

    return result instanceof Error ? 
      response.status(404).json({message: result.message}) :
      response.status(200).json({message: 'successfully deleted'})
  }
}