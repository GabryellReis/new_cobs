import { Router } from "express";
import { UserController } from "../controller/userController";

const userRoutes = Router();
const controller = new UserController();

userRoutes.get("/clientes", controller.getAllUsers);
// userRoutes.get('/users/sups', controller.getAllSupporters)
// userRoutes.post("/user", controller.getUserByRid);
// userRoutes.post("/user/register", controller.registerUser);
// userRoutes.put("/user/:rid", controller.registerUser);
// userRoutes.delete("/user/:rid", controller.deleteUser);

export { userRoutes };
