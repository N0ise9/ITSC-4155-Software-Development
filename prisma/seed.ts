/* eslint-disable */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";

const prisma = new PrismaClient();

const restaurants = fs.readFileSync("./src/services/yelp/cleanedYelp.json", "utf-8");
const prettyJson = JSON.parse(restaurants);

async function main() {
  for (let restaurant of prettyJson) {
    console.info(restaurant);
    await prisma.restaurant.create({
      data: restaurant,
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
