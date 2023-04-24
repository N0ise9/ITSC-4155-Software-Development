import { Prisma, PrismaClient } from "@prisma/client";
import { waitForAllPromises } from "../utils/utils";
import { UpdateUserInSiteInput } from "../utils/types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export class UserRepository {
  #User: Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#User = new PrismaClient().user;
  }

  async updateUserInSite(userID: string, updates: UpdateUserInSiteInput): Promise<void> {
    await this.#User
      .update({
        data: {
          cuisineMMR: updates.cuisineMMR,
          flavorMMR: updates.flavorMMR,
          foodMMR: updates.foodMMR,
          userRanking: updates.userRanking,
        },
        where: {
          id: userID,
        },
      })
      .catch((err) => {
        if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
          throw new Error(`User with ID: ${userID} does not exist.`);
        }
      });
  }
}

export default new UserRepository();
