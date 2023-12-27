import { Router } from "express";
import { BagController } from "../controller/bagController";

const bagRoutes = Router();
const controller = new BagController();

bagRoutes.get("/bags", controller.getAllBags);
bagRoutes.get("/bag", controller.getBagByNid);
bagRoutes.post("/bag/register", controller.registerBag);
bagRoutes.put("/bag/:nid", controller.updateBag);
bagRoutes.delete("/bag/:nid", controller.deleteBag);

export { bagRoutes };
