import { Prisma, PrismaClient } from "@prisma/client";
import { waitForAllPromises } from "../utils/utils";
import { RestaurantData } from "../utils/types";

export class RestaurantRepository {
  #Restaurant: Prisma.RestaurantDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

  constructor() {
    this.#Restaurant = new PrismaClient().restaurant;
  }

  async getRestaurantData(restaurantID: string): Promise<Readonly<RestaurantData> | null> {
    const restaurant = await this.#Restaurant.findUnique({
      select: {
        categories: true,
        cuisine: true,
        display_phone: true,
        id: true,
        image_url: true,
        location: true,
        name: true,
        phone: true,
        price: true,
        rating: true,
        review_count: true,
        url: true,
      },
      where: {
        id: restaurantID,
      },
    });
    return restaurant;
  }
}
