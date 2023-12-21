import { Request, Response } from "express";
import { UserService } from "../service/userService";

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
}