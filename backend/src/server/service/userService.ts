import { prisma } from "../../prisma/prismaClient"; 

export class UserService {
  async getAllUsers() {
    const data = prisma.user.findMany()
    return data;
  }
  async getUserByRid(rid: string) {
    const user = prisma.user.findUnique({where: {rid}})
    return user
  }

  async registerUser(rid: string, name: string, sector: string, office: string, permissions: string) {
    const newUser = await prisma.user.create({
      data: {
        rid,
        name,
        sector,
        office,
        permissions
      }
    })
    return newUser;
  }

  async updateUser(rid: string, name: string, sector: string, office: string, permissions: string) {
    const updatedUser = await prisma.user.update({
      where: {rid},
      data: {
        rid,
        name,
        sector,
        office,
        permissions,
        updatedAt: new Date()
      }
    })
    return updatedUser;
  }

  async deleteUser(rid: string) {
    const deletedUser = await prisma.user.delete({where: {rid}})
    return deletedUser;
  }
}