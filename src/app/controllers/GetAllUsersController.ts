import {Request, Response} from 'express'
import { GetAllUsersService } from '../services/GetAllUsersService'

export class GetAllUsersController{
  async handle(request: Request, response: Response){
    const getAllUsersService = new GetAllUsersService()
    const users = await getAllUsersService.execute()
    return response.json(users)
  }
}