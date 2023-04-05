/*
  Warnings:

  - Changed the type of `categories` on the `Restaurant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `location` on the `Restaurant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "categories",
ADD COLUMN     "categories" JSONB NOT NULL,
DROP COLUMN "location",
ADD COLUMN     "location" JSONB NOT NULL;
