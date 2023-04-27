/*
  Warnings:

  - You are about to drop the column `calories` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `carbs` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `fat` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `flavor` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `RestaurantFood` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantID` on the `RestaurantFood` table. All the data in the column will be lost.
  - Added the required column `flavor_profile` to the `RestaurantFood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food` to the `RestaurantFood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `RestaurantFood` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RestaurantFood" DROP COLUMN "calories",
DROP COLUMN "carbs",
DROP COLUMN "fat",
DROP COLUMN "flavor",
DROP COLUMN "name",
DROP COLUMN "protein",
DROP COLUMN "restaurantID",
ADD COLUMN     "flavor_profile" INTEGER NOT NULL,
ADD COLUMN     "food" VARCHAR(255) NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL;
