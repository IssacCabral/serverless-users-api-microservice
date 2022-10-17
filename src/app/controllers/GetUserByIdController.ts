import {Request, Response} from 'express'
import { GetUserByIdService } from '../services/GetUserByIdService'

export class GetUserByIdController{
  async handle(request: Request, response: Response){
    const {userId} = request.params

    const getUserByIdService = new GetUserByIdService()
    const result = await getUserByIdService.execute(Number(userId))
    
    return result instanceof Error ? response.status(404).json(result.message) : response.status(200).json(result)
  }
}