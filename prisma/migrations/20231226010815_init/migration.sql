-- CreateTable
CREATE TABLE `Storit` (
    `id` VARCHAR(30) NOT NULL,
    `pub` BOOLEAN NOT NULL DEFAULT false,
    `userID` VARCHAR(30) NOT NULL,
    `data` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Storit_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
