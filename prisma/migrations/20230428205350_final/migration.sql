/*
  Warnings:

  - Changed the type of `flavor` on the `Food` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Food" DROP COLUMN "flavor",
ADD COLUMN     "flavor" INTEGER NOT NULL;
