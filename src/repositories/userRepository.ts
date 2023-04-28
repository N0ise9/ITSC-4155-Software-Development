import { Prisma, PrismaClient, User } from "@prisma/client";
import { UserInSite, UserFoodRanking } from "../utils/types";

export class UserRepository {
  #User: Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#User = new PrismaClient().user;
  }

  async #getUserInSite(user: User): Promise<UserInSite> {
    const userInSite = {
      cuisineMMR: [],
      foodMMR: [],
      id: user.id,
      userRanking: [],
    };

    return userInSite;
  }

  async getUser(id: string): Promise<UserInSite | null> {
    const user = await this.#User.findUnique({
      where: {
        id: id,
      },
    });

    if (user) {
      return this.#getUserInSite(user);
    } else {
      return null;
    }
  }

  getAllUserRankings(user: UserInSite): ReadonlyArray<UserFoodRanking> {
    return user.userRanking;
  }
}

export default new UserRepository();
