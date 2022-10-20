import { Request, Response, NextFunction } from "express";
import axios from "axios";
import env from "../config/env";

export default async function AuthMiddleware(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers['authorization']
  try{
    const result = await axios.post(`${env.AUTH_SERVICE_URL}/tokens/verify`, {authToken})
    request.user = result.data
    next()
  } catch(error){
    const statusCode = error?.response?.status
    return response.status(statusCode).json(error.response?.data)
  }
}