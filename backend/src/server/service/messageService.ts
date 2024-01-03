import { prisma } from "../../prisma/prismaClient";


export class MessageService {
  async getAllMessages() {
    const messages = await prisma.message.findMany();
    return messages
  }

  async getMessageById(id: string) {
    const message = await prisma.message.findUnique({ where: { id_message: id } })
    return message;
  }

  async getMessageByRid(rid: string) {
    const messages = await prisma.message.findMany({ where: { sender_id: rid } })
    return messages
  }

  async getMessagesByChatId(id_chat: string) {
    const messages = await prisma.message.findMany({ where: { id_chat }, select: {
      content: true,
      receiver_id: true, 
      sender_id: true
    } })
    return messages;
  }

  async sendNewMessage(id_chat: string, content: string, sender: string, receiver: string) {
    const newMessage = await prisma.message.create({
      data: {
        content,
        sender_id: sender,
        receiver_id: receiver,
        id_chat
      }
    })
    await prisma.chat.update({
      where: { id_chat },
      data: {
        updatedAt: new Date()
      }
    })
    return newMessage;
  }

  async autUpdateMessage(id_chat: string, id_message: string, state: string) {
    const autUpdatedMessage = await prisma.message.update({
      where: {id_message}, 
      data: {
        state 
      }
    })
    return autUpdatedMessage;
  } 

  async updateMessage(id_message: string, content: string, id_chat: string) {
    const updatedMessage = await prisma.message.update({
      where: { id_message },
      data: {
        content
      }
    })

    await prisma.chat.update({
      where: { id_chat },
      data: {
        updatedAt: new Date()
      }
    })
    return updatedMessage;
  }

  async deleteMessage(id_message: string) {
    const deletedMessage = await prisma.message.delete({ where: { id_message } })
    return deletedMessage;
  }
}