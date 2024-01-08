import { Router } from "express";
import { OccurrenceController } from "../controller/occurrenceController";

const occurrencesRoutes = Router();
const controller = new OccurrenceController();

occurrencesRoutes.get("/occurrences", controller.getAllOccurrence);
occurrencesRoutes.post("/occurrence", controller.getOccurrenceByID);

export { occurrencesRoutes };
