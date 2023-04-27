import { Prisma, PrismaClient } from "@prisma/client";

export class FoodRepository {
  #Food: Prisma.FoodDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#Food = new PrismaClient().food;
  }

  //code goes here
}
