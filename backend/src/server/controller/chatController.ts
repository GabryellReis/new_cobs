import { ChatService } from '../service/chatService'
import { Request, Response } from "express";


const service = new ChatService()
export class ChatController {
  async getAllChats(req: Request, res: Response) {
    try {
      const data = await service.getAllChats()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getAllChatsByRid(req: Request, res: Response) {
    try {
      const { rid } = req.params
      const data = await service.getAllChatsByRid(rid)
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async getChatById(req: Request, res: Response) {
    try {
      const { id_chat } = req.body
      const data = await service.getChatById(id_chat)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async newChatController(req: Request, res: Response) {
    try {
      const { user_id } = req.params
      const { agent_id } = req.body
      const data = await service.newChatService(user_id, agent_id)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteChatById(req: Request, res: Response) {
    try {
      const { chat_id } = req.params
      const data = await service.deleteChatById(chat_id)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
