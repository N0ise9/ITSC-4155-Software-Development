 /* eslint-disable */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";

const prisma = new PrismaClient();

// let restaurants:string[];

// const datas = fs.readFile("./data.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(JSON.parse(data));
//   restaurants = JSON.parse(data);
//   //console.log(restaurants)
// });

const restaurants = fs.readFileSync("./data.json", "utf-8");
const prettyJson = JSON.parse(restaurants);

//const restaurants = fs.readFileSync("./data.json").toString();

async function main() {
  // await prisma.restaurant.createMany({});
  //console.log(JSON.parse(global_data));
  //console.log(JSON.parse(restaurants))
  for (let restaurant of prettyJson) {
    console.log(restaurant)
    await prisma.restaurant.create({
      data: restaurant,
    });
  }
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
