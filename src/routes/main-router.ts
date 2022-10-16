import "reflect-metadata"
import dataSource from "../database/data-source";
import { Router } from "express";
import { User } from "../app/entities/User";

const mainRouter = Router()

mainRouter.get("/", async (req, res, next) => {
  const connection = await dataSource.initialize()

  const usersRepository = connection.getRepository(User)
  const users = await usersRepository.find()

  console.log('conectado com sucesso ao banco')

  return res.status(200).json({
    message: users,
  });
});

mainRouter.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

export default mainRouter