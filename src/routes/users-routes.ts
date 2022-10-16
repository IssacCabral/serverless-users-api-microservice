import { Router } from "express";
import { GetAllUsersController } from "../app/controllers/GetAllUsersController";

const usersRoutes = Router()

usersRoutes.get('/users', new GetAllUsersController().handle)

export default usersRoutes