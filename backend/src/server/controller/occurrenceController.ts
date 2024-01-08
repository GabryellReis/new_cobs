import { Request, Response } from "express";
import { OccurrenceService } from "../service/occurrenceService";

const service = new OccurrenceService()

export class OccurrenceController {
  async getAllOccurrence(req: Request, res: Response) {
    try {
      const data = await service.getAllOccurrence()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getOccurrenceByID(req: Request, res: Response) {
    try {
      const { id } = req.body
      const data = await service.getOccurrenceByID(id)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async createNewOccurrence(req: Request, res: Response) {
    try {
      const data = await service.createNewOccurrence()
      return res.status(201).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}