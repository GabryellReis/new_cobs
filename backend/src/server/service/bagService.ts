import { resourceUsage } from "process";
import { prisma } from "../../prisma/prismaClient";

export class BagService {
  async getAllBags() {
    const data = await prisma.bag.findMany()
    return data ;
  }

  async getBagByNid(nid: string) {
    const data = await prisma.bag.findUnique({ where: { nid } })
    return data
  }

  async registerBag(nid: string, location: string, operation: string, state: string, rid_autor: string, image_url: string) {
    const newBag = await prisma.bag.create({
      data: {
        nid,
        location,
        operation,
        state,
        rid_autor,
        image_url,
      }
    });
    return  newBag
  }

  async updateBag(nid: string, location: string, operation: string, state: string) {
    const updatedBag = await prisma.bag.update({
      where: { nid }, data: {
        nid, location, operation, state, updatedAt: new Date()
      }
    });
    return updatedBag 
  }

  async deleteBag(nid: string) {
    const deletedBag = await prisma.bag.delete({ where: { nid } })
    return deletedBag
  }


}