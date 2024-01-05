import express ,{ Router } from "express";
import { BagController } from "../controller/bagController";

import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'images/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage})

const bagRoutes = Router();
const controller = new BagController();

bagRoutes.get("/bags", controller.getAllBags);
bagRoutes.post("/bag", controller.getBagByNid);
bagRoutes.post("/bag/register", upload.single('image_url'), controller.registerBag);
bagRoutes.put("/bag/:nid", controller.updateBag);
bagRoutes.delete("/bag/:nid", controller.deleteBag);

export { bagRoutes };
