import { Router } from "express";
import usersRoutes from "./users-routes";
import helloServerlessRoutes from "./hello-serverless-routes";

const mainRouter = Router()

mainRouter
  .use(usersRoutes)
  .use(helloServerlessRoutes)

export default mainRouter