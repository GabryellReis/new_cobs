import { UserService } from "../service/userService";
import { Request, Response } from "express";

const service = new UserService()
export class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const data = await service.getAllUsers()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getUserByRID(req: Request, res: Response) {
    try {
      const {rid} = req.body
      const data = await service.getUserByRID(rid)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}