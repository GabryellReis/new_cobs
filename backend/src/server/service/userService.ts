import { prisma } from "../../prisma/prismaClient";

export class UserService {
  async getAllUsers() {
    const data = await prisma.usuario.findMany();
    return data;
  }

  async getUserByRID(rid: string) {
    const data = await prisma.usuario.findUnique({
      where: { rid },
    });
    return data;
  }
}
