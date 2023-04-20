import { Prisma, PrismaClient } from "@prisma/client";
import { waitForAllPromises } from "../utils/utils";

export class UserRepository {
  #User: Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#User = new PrismaClient().user;
  }

  //code goes here
}
