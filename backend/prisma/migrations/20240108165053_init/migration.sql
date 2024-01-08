-- CreateTable
CREATE TABLE `ocorrencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dt_nf` DATETIME(3) NOT NULL,
    `dt_entrada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dt_saida` DATETIME(3) NOT NULL,
    `terceiro` INTEGER NULL,
    `total_bags` INTEGER NOT NULL,
    `total_avariados` INTEGER NULL DEFAULT 0,
    `observacao` VARCHAR(191) NOT NULL,
    `ref_transporte` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avariados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lote` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `sujidade` VARCHAR(191) NOT NULL,
    `foto_avaria` VARCHAR(191) NOT NULL,
    `id_ocorrencia` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `codigo` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `razao_social` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `clientes_cnpj_key`(`cnpj`),
    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transportes` (
    `placa_veiculo` VARCHAR(191) NOT NULL,
    `nome_motorista` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cnh` VARCHAR(191) NOT NULL,
    `assinatura_motorista` VARCHAR(191) NOT NULL,
    `ref_cliente` INTEGER NOT NULL,

    PRIMARY KEY (`placa_veiculo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_ref_transporte_fkey` FOREIGN KEY (`ref_transporte`) REFERENCES `transportes`(`placa_veiculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avariados` ADD CONSTRAINT `avariados_id_ocorrencia_fkey` FOREIGN KEY (`id_ocorrencia`) REFERENCES `ocorrencias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportes` ADD CONSTRAINT `transportes_ref_cliente_fkey` FOREIGN KEY (`ref_cliente`) REFERENCES `clientes`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
