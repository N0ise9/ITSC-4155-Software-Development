/* eslint-disable */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";

const prisma = new PrismaClient();

const restaurants = fs.readFileSync("./src/services/yelp/cleanedYelp.json", "utf-8");
const foods = fs.readFileSync("./src/services/foodsCollection/modifiedFoods.json", "utf-8");
const restaurantsPrettyJson = JSON.parse(restaurants);
const foodsPrettyJson = JSON.parse(foods);

async function main() {
  for (let restaurant of restaurantsPrettyJson) {
    console.info(restaurant);
    await prisma.restaurant.create({
      data: restaurant,
    });
  }

  for (let food of foodsPrettyJson) {
    console.info(food);
    await prisma.restaurantFood.create({
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
