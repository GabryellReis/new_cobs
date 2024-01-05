import { BagService } from '../service/bagService';
import { Request, Response } from 'express';
const service = new BagService();

export class BagController {

  async getAllBags(req: Request, res: Response) {
    try {
      const data = await service.getAllBags()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getBagByNid(req: Request, res: Response) {
    try {
      const {nid} = req.body
      const data = await service.getBagByNid(nid)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async registerBag(req: Request, res: Response) {
    try {
      const {nid, location, state, operation, image_url} = req.body
      const {rid_autor} = req.params
      const data = await service.registerBag(nid, location, state, operation, rid_autor, image_url)
      return res.status(201).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async updateBag(req: Request, res: Response) {
    try {
      const {nid, location, state, operation} = req.body
      const data = await service.updateBag(nid, location, state, operation)
      return res.status(204).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteBag(req: Request, res: Response) {
    try {
      const {nid} = req.params
      const data = await service.deleteBag(nid)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}