/*
  Warnings:

  - Added the required column `rid` to the `ocorrencias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocorrencias` ADD COLUMN `rid` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `users` (
    `rid` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `permissoes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_rid_fkey` FOREIGN KEY (`rid`) REFERENCES `users`(`rid`) ON DELETE RESTRICT ON UPDATE CASCADE;
