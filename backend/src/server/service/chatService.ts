import { prisma } from "../../prisma/prismaClient";

export class ChatService {
  async getAllChats() {
    const data = await prisma.chat.findMany()
    return data
  }

  async getAllChatsByRid(rid: string) {
    const data = await prisma.chat.findMany(
      { where: { user_id: rid } }
    )
  }

  async getChatById(chat_id: string) {
    const data = await prisma.chat.findUnique({ where: { chat_id } })
    return data
  }

  async newChatService(user_id: string, agent_id: string) {
    const data = await prisma.chat.create({
      data: {
        user_id,
        agent_id,
        createdAt: new Date()
      }
    })
    return data
  }

  async deleteChatById(chat_id: string) {
    const data = await prisma.chat.delete({ where: { chat_id } })
    return data;
  }

}