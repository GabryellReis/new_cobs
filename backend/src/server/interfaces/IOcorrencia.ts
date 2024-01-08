interface IOcorrencia {
  id: number,
  dt_nf: string,
  dt_entrada: string,
  dt_saida: string
  terceiro: number | 0
  total_bags: number | 0
  total_avariados: number | 0
  observacao: string
  ref_transporte: string
}

export default IOcorrencia;