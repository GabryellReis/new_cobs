/*
  Warnings:

  - Added the required column `observacao` to the `ocorrencias` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ocorrencias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dt_nf" DATETIME NOT NULL,
    "dt_entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_saida" DATETIME NOT NULL,
    "terceiro" INTEGER,
    "total_bags" INTEGER NOT NULL,
    "total_avariados" INTEGER DEFAULT 0,
    "observacao" TEXT NOT NULL,
    "ref_transporte" TEXT NOT NULL,
    CONSTRAINT "ocorrencias_ref_transporte_fkey" FOREIGN KEY ("ref_transporte") REFERENCES "transportes" ("placa_veiculo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ocorrencias" ("dt_entrada", "dt_nf", "dt_saida", "id", "ref_transporte", "terceiro", "total_avariados", "total_bags") SELECT "dt_entrada", "dt_nf", "dt_saida", "id", "ref_transporte", "terceiro", "total_avariados", "total_bags" FROM "ocorrencias";
DROP TABLE "ocorrencias";
ALTER TABLE "new_ocorrencias" RENAME TO "ocorrencias";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
