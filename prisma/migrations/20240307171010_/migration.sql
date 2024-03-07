-- AlterTable
ALTER TABLE `Autor` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Emprestimo` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Livro` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;
