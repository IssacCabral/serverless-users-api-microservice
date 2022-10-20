import { Request, Response, NextFunction } from "express";
import axios from "axios";

export default async function AuthMiddleware(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers['authorization']
  try{
    const result = await axios.post('http://localhost:3000/tokens/verify', {authToken})
    request.user = result.data
    next()
  } catch(error){
    const statusCode = error?.response?.status
    return response.status(statusCode).json(error.response?.data)
  }
}