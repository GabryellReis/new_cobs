import { prisma } from "../../prisma/prismaClient";

export class ChatService {
  async getAllChats() {
    const data = await prisma.chat.findMany({ select: { Message: true, createdAt: true, updatedAt: true, id_chat: true } })
    return data
  }

  async getAllChatsByRid(rid: string) {
    const data = await prisma.chat.findMany(
      {
        where: {
          OR: [
            { id_user: rid },
            { id_agent: rid }
          ]
        }
      }
    )
    return data
  }

  async getChatById(id_chat: string) {
    const data = await prisma.chat.findUnique({ where: { id_chat } })
    return data
  }

  async newChatService(id_user: string, id_agent: string) {
    const data = await prisma.chat.create({
      data: {
        id_user,
        id_agent,
        createdAt: new Date()
      }
    })
    return data
  }

  async deleteChatById(id_chat: string) {
    const data = await prisma.chat.delete({ where: { id_chat } })
    return data;
  }

}