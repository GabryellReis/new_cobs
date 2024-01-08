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

  async registerBag(nid: string, location: string, operation: string, state: string, rid_author: string, image_url: string) {
    const newBag = await prisma.bag.create({
      data: {
        nid,
        location,
        operation,
        state,
        image_url,
        rid_author
    }
    });
    return  newBag
  }

  async updateBag(nid: string, location: string, operation: string, state: string, image_url: string) {
    const updatedBag = await prisma.bag.update({
      where: { nid }, data: {
        nid, location, operation, state, updatedAt: new Date(), image_url
      }
    });
    return updatedBag 
  }

  async deleteBag(nid: string) {
    const deletedBag = await prisma.bag.delete({ where: { nid } })
    return deletedBag
  }


}