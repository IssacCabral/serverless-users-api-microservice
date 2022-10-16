import { Router } from "express";

const mainRouter = Router()

mainRouter.get("/", (req, res, next) => {
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