interface IAvariado {
  id: number,
  lote: string,
  tipo: string | "rasgo fundo" | "rasgo alca" | "rasgo corpo" | "rasgo boca",
  sujidade: string,
  foto_avaria: string, 
}

export default IAvariado;