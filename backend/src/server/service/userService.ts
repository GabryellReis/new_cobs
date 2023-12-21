import { prisma } from "../../prisma/prismaClient"; 

export class UserService {
  async getAllUsers() {
    const data = prisma.user.findMany()
    return data;
  }
}