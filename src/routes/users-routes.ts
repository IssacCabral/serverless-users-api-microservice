import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { DeleteUserController } from "../app/controllers/DeleteUserContorller";
import { GetAllUsersController } from "../app/controllers/GetAllUsersController";
import { GetUserByIdController } from "../app/controllers/GetUserByIdController";
import { UpdateUserController } from "../app/controllers/UpdateUserController";

const usersRoutes = Router()

usersRoutes.post('/users', new CreateUserController().handle)
usersRoutes.get('/users', new GetAllUsersController().handle)
usersRoutes.get('/users/:userId', new GetUserByIdController().handle)
usersRoutes.patch('/users/:userId', new UpdateUserController().handle)
usersRoutes.delete('/users/:userId', new DeleteUserController().handle)

export default usersRoutes