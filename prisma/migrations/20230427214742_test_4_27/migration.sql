/*
  Warnings:

  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantFood` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Restaurant";

-- DropTable
DROP TABLE "RestaurantFood";

-- CreateTable
CREATE TABLE "Food" (
    "foodID" TEXT NOT NULL,
    "cuisine" INTEGER NOT NULL,
    "flavor" INTEGER[],
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("foodID")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurantfood_foodid_unique" ON "Food"("foodID");
