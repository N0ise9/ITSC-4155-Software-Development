/*
  Warnings:

  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `restaurantID` on the `Restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Restaurant_restaurantID_key";

-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
DROP COLUMN "restaurantID",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");
