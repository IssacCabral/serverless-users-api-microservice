import { Router } from "express";
import { CreateUserController } from "../app/controllers/CreateUserController";
import { DeleteUserController } from "../app/controllers/DeleteUserController";
import { GetAllUsersController } from "../app/controllers/GetAllUsersController";
import { GetUserByIdController } from "../app/controllers/GetUserByIdController";
import { UpdateUserController } from "../app/controllers/UpdateUserController";
import AuthMiddleware from "../middleware/AuthMiddleware";

const usersRoutes = Router()

usersRoutes.post('/users', new CreateUserController().handle)
usersRoutes.get('/users', AuthMiddleware, new GetAllUsersController().handle)
usersRoutes.get('/users/:userId', AuthMiddleware, new GetUserByIdController().handle)
usersRoutes.patch('/users/:userId', AuthMiddleware, new UpdateUserController().handle)
usersRoutes.delete('/users/:userId', AuthMiddleware, new DeleteUserController().handle)

export default usersRoutes