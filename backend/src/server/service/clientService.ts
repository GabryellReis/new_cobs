import { prisma } from "../../prisma/prismaClient";
import IClient from "../interfaces/IClient";

export class UserService {
  async getAllCLients() {
    const data = await prisma.cliente.findMany()
    return data;
  }

  async getClientByID(id: number) {
    const data = await prisma.cliente.findUnique({ where: { codigo: id } })
    return data;
  }

  async createNewClient(nClient: IClient) {
    const data = await prisma.cliente.create({
      data: {
        codigo: nClient.codigo,
        nome: nClient.nome,
        cnpj: nClient.cnpj,
        cidade: nClient.cidade,
        estado: nClient.estado,
        razao_social: nClient.razao_social
      }
    })
    return data;
  }

  async updateClient(uClient: IClient, id: number) {
    const data = await prisma.cliente.update({
      where: { codigo: id },
      data: {
        cidade: uClient.cidade,
        cnpj: uClient.cnpj,
        estado: uClient.estado,
        nome: uClient.nome,
        razao_social: uClient.razao_social,
      }
    });
    return data;
  }

  async deleteClient(id: number) {
    const data = await prisma.cliente.delete({where: {codigo: id}})
    return data;
  }
}