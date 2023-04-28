import { Prisma, PrismaClient } from "@prisma/client";
import { FoodMMR } from "../utils/types";

export class FoodRepository {
  #Food: Prisma.FoodDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#Food = new PrismaClient().food;
  }

  getRanking(foodMMR: FoodMMR): number {
    return foodMMR.mmr;
  }
}

export default new FoodRepository();
