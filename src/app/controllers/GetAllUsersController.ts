import {Request, Response} from 'express'
import { GetAllUsersService } from '../services/GetAllUsersService'

export class GetAllUsersController{
  async handle(request: Request, response: Response){
    const { page, per_page } = request.query
    const getAllUsersService = new GetAllUsersService()
    const users = await getAllUsersService.execute({page: Number(page), per_page: Number(per_page)})
    return response.json(users)
  }
}