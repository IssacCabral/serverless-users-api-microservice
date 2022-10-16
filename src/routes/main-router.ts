import "reflect-metadata"
import dataSource from "../database/data-source";
import { Router } from "express";

const mainRouter = Router()

mainRouter.get("/", async (req, res, next) => {
  await dataSource.initialize()

  console.log('conectado com sucesso ao banco')

  return res.status(200).json({
    message: "Hello from root!",
  });
});

mainRouter.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

export default mainRouter