-- CreateTable
CREATE TABLE "ocorrencias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dt_nf" DATETIME NOT NULL,
    "dt_entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_saida" DATETIME NOT NULL,
    "terceiro" INTEGER,
    "total_bags" INTEGER NOT NULL,
    "total_avariados" INTEGER,
    "ref_transporte" TEXT NOT NULL,
    CONSTRAINT "ocorrencias_ref_transporte_fkey" FOREIGN KEY ("ref_transporte") REFERENCES "transportes" ("placa_veiculo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "avariados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lote" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "sujidade" TEXT NOT NULL,
    "foto_avaria" TEXT NOT NULL,
    "id_ocorrencia" INTEGER NOT NULL,
    CONSTRAINT "avariados_id_ocorrencia_fkey" FOREIGN KEY ("id_ocorrencia") REFERENCES "ocorrencias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clientes" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "transportes" (
    "placa_veiculo" TEXT NOT NULL PRIMARY KEY,
    "nome_motorista" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnh" TEXT NOT NULL,
    "assinatura_motorista" TEXT NOT NULL,
    "ref_cliente" INTEGER NOT NULL,
    CONSTRAINT "transportes_ref_cliente_fkey" FOREIGN KEY ("ref_cliente") REFERENCES "clientes" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);
