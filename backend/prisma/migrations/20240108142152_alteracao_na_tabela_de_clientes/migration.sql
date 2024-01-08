/*
  Warnings:

  - Added the required column `cnpj` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razao_social` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL
);
INSERT INTO "new_clientes" ("cidade", "codigo", "estado", "nome") SELECT "cidade", "codigo", "estado", "nome" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
