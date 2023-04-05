/*
  Warnings:

  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `cuisine` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `display_phone` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review_count` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Made the column `rating` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
DROP COLUMN "address",
DROP COLUMN "cuisine",
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "display_phone" TEXT NOT NULL,
ADD COLUMN     "location" TEXT[],
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "review_count" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "restaurantID" DROP DEFAULT,
ALTER COLUMN "restaurantID" SET DATA TYPE TEXT,
ALTER COLUMN "rating" SET NOT NULL,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurantID");
DROP SEQUENCE "Restaurant_restaurantID_seq";
