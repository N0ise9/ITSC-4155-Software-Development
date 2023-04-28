import { Prisma, PrismaClient } from "@prisma/client";

export class UserRepository {
  #User: Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#User = new PrismaClient().user;
  }
}

export default new UserRepository();
