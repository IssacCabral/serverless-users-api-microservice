import { Router } from "express";
import usersRoutes from "./users-routes";

const mainRouter = Router()

mainRouter
  .use(usersRoutes)

export default mainRouter