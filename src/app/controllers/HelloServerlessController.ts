import {Request, Response} from 'express'
import { HelloServelessService } from '../services/HelloServerlessService'

export class HelloServerlessController{
  async handle(request: Request, response: Response){
    const helloServerlessService = new HelloServelessService()
    const result = await helloServerlessService.execute(request.user.email)

    return result instanceof Error ? 
      response.status(404).json(result.message) : 
      response.status(200).json({hello: `Welcome to serverless ${result}`})
  }
}