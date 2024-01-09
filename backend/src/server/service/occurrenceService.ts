import { prisma } from "../../prisma/prismaClient";
import IOcorrencia from "../interfaces/IOcorrencia";


export class OccurrenceService {
  async getAllOccurrence() {
    const data = await prisma.ocorrencia.findMany();
    return data
  }
  
  async getOccurrenceByID(id: number) {
    const data = await prisma.ocorrencia.findUnique({where: {id}})
    return data
  }

  // async createNewOccurrence(nOccurrence: IOcorrencia) {

  //   const data = await prisma.ocorrencia.create({
  //     data: {
  //       dt_nf: nOccurrence.dt_nf,
  //       observacao: nOccurrence.observacao,
  //       total_bags: nOccurrence.total_bags,
  //       dt_entrada: nOccurrence.dt_entrada,
  //       dt_saida: nOccurrence.dt_saida,
  //       terceiro: nOccurrence.terceiro,
  //       total_avariados: nOccurrence.total_avariados,
  //       ref_transporte: nOccurrence.ref_transporte
  //     }
  //   })
  //   return data
  // }
}