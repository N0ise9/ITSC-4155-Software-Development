/*
  Warnings:

  - Added the required column `thumbnail` to the `RestaurantFood` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RestaurantFood" ADD COLUMN     "thumbnail" TEXT NOT NULL;
