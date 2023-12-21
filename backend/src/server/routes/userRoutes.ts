import { Router } from "express";
import { UserController } from "../controller/userController";

const userRoutes = Router();
const controller = new UserController();

userRoutes.get("/users", controller.getAllUsers);

export { userRoutes };
