/* eslint-disable */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";

const prisma = new PrismaClient();

const foods = fs.readFileSync("./src/services/foodsCollection/modifiedFoods.json", "utf-8");
const foodsPrettyJson = JSON.parse(foods);

async function main() {
  for (let food of foodsPrettyJson) {
    console.info(food);
    await prisma.food.create({
      data: food,
    });
  }
}

main()
  .catch((err) => {
    console.info(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
