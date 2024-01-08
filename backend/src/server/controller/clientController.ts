import { Request, Response } from "express";
import { UserService } from "../service/clientService";
import IClient from "../interfaces/IClient";

const service = new UserService()
export class UserController {
  async getAllCLients(req: Request, res: Response) {
    try {
      const data = await service.getAllCLients()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getClientByID(req: Request, res: Response) {
    try {
      const {codigo} = req.body
      const data = await service.getClientByID(codigo)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async createNewClient(req: Request, res: Response) {
    try {
      const {codigo , cidade, cnpj, estado, nome, razao_social} = req.body
      const client: IClient = {
        codigo,
        cidade,
        cnpj,
        estado,
        nome,
        razao_social
      }
      const data = await service.createNewClient(client)
      return res.status(201).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async updateClient(req: Request, res: Response) {
    try {
      const {cidade, cnpj, estado, nome, razao_social} = req.body
      const {id} = req.params
      const client: IClient = {
        codigo: Number(id),
        cidade,
        cnpj,
        estado,
        nome,
        razao_social
      }
      const data = await service.updateClient(client, Number(id))
      return res.status(201).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteClient(req: Request, res: Response) {
    try {
      const {id} = req.params
      const data = await service.deleteClient(Number(id))
      return res.status(204).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}