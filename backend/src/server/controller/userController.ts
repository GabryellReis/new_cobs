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

  async getAllSupporters(req: Request, res: Response) {
    try {
      const data = await service.getAllSupporters()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getUserByRid(req: Request, res: Response) {
    try {
      const { rid } = req.body
      const data = await service.getUserByRid(rid)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async registerUser(req: Request, res: Response) {
    try {
      const { rid, name, sector, office, permissions } = req.body
      const data = await service.registerUser(rid, name, sector, office, permissions)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { rid } = req.params
      const { name, sector, office, permissions } = req.body
      const data = await service.updateUser(rid, name, sector, office, permissions);
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { rid } = req.params
      const data = await service.deleteUser(rid)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}