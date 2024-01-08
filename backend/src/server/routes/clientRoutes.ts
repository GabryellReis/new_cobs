import { Router } from "express";
import { UserController } from "../controller/clientController";

const clientRoutes = Router();
const controller = new UserController();

clientRoutes.get("/clients", controller.getAllCLients);
clientRoutes.post('/client', controller.getClientByID)
clientRoutes.post('/client/create', controller.createNewClient)
clientRoutes.put('/client/update', controller.updateClient)
clientRoutes.delete("/client/delete", controller.deleteClient)

export { clientRoutes };
