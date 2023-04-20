import { Prisma, PrismaClient } from "@prisma/client";
import { waitForAllPromises } from "../utils/utils";

export class RestaurantFoodRepository {
  #RestaurantFood: Prisma.RestaurantFoodDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#RestaurantFood = new PrismaClient().restaurantFood;
  }

  //code goes here
}
