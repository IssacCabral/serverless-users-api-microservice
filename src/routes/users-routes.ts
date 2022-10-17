import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { GetAllUsersController } from "../app/controllers/GetAllUsersController";

const usersRoutes = Router()

usersRoutes.get('/users', new GetAllUsersController().handle)
usersRoutes.post('/users', new CreateUserController().handle)

export default usersRoutes