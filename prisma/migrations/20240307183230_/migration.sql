/*
  Warnings:

  - You are about to drop the `Autor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emprestimo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Livro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Emprestimo` DROP FOREIGN KEY `Emprestimo_livroId_fkey`;

-- DropForeignKey
ALTER TABLE `Emprestimo` DROP FOREIGN KEY `Emprestimo_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `Livro` DROP FOREIGN KEY `Livro_autorId_fkey`;

-- DropTable
DROP TABLE `Autor`;

-- DropTable
DROP TABLE `Emprestimo`;

-- DropTable
DROP TABLE `Livro`;

-- DropTable
DROP TABLE `Usuario`;

-- CreateTable
CREATE TABLE `Autores` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livros` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `dataPublicacao` DATETIME(3) NULL,
    `autorId` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprestimos` (
    `id` VARCHAR(191) NOT NULL,
    `livroId` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `dataEmprestimo` DATETIME(3) NOT NULL,
    `dataDevolucao` DATETIME(3) NULL,
    `dataDevolvido` DATETIME(3) NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Livros` ADD CONSTRAINT `Livros_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Autores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
