/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ocorrencias` DROP FOREIGN KEY `ocorrencias_rid_fkey`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `usuarios` (
    `rid` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `permissoes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_rid_fkey` FOREIGN KEY (`rid`) REFERENCES `usuarios`(`rid`) ON DELETE RESTRICT ON UPDATE CASCADE;
