import { Prisma, PrismaClient } from "@prisma/client";

export class RestaurantFoodRepository {
  #RestaurantFood: Prisma.RestaurantFoodDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#RestaurantFood = new PrismaClient().restaurantFood;
  }

  //code goes here
}
