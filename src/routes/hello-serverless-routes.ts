import { Router } from "express";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { HelloServerlessController } from "../app/controllers/HelloServerlessController";

const helloServerlessRoutes = Router()

helloServerlessRoutes.get('/hello-serverless', AuthMiddleware, new HelloServerlessController().handle)

export default helloServerlessRoutes