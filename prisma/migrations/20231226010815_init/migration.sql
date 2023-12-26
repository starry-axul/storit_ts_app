-- CreateTable
CREATE TABLE `Storit` (
    `id` VARCHAR(36) NOT NULL,
    `pub` BOOLEAN NOT NULL DEFAULT false,
    `userID` VARCHAR(36) NOT NULL,
    `data` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Storit_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;