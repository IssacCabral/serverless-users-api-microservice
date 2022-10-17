import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { DeleteUserController } from "../app/controllers/DeleteUserContorller";
import { GetAllUsersController } from "../app/controllers/GetAllUsersController";

const usersRoutes = Router()

usersRoutes.get('/users', new GetAllUsersController().handle)
usersRoutes.post('/users', new CreateUserController().handle)
usersRoutes.delete('/users/:userId', new DeleteUserController().handle)

export default usersRoutes