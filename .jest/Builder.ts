import { Cuisine, UserInSite } from "../src/utils/types";
import falso from "@ngneat/falso";

abstract class Builder<T> {
  abstract isEqual(a: T, b: T): boolean;

  abstract single(overrides?: Partial<T>): T;

  many(count: number, overrides?: Partial<T>): Array<T> {
    const items: Array<T> = [];

    for (let i = 0; i < count; i++) {
      let isNotUnique = true;
      let hardStopCounter = 0;
      let item: T;

      do {
        if (hardStopCounter === 1000) {
          throw new Error(
            "Generated too many items without finding a unique instance. You may need to adjust your isEqual implementation."
          );
        }

        hardStopCounter++;
        item = this.single(overrides);
        isNotUnique = items.some((i) => this.isEqual(item, i));
      } while (isNotUnique);

      items.push(item);
    }

    return items;
  }
}

class UserInSiteBuilderClass extends Builder<UserInSite> {
  isEqual(a: UserInSite, b: UserInSite) {
    return a.id === b.id;
  }

  single(overrides?: Partial<UserInSite>) {
    return {
      id: falso.incrementalNumber(),
      cuisineChoices: faker.datatype.Array.Cuisine(),
      flavorChoices: faker.datatype.Array.Flavor(),
      foodChoices: faker.datatype.Array.Food(),
      foodFondness: faker.datatype.ReadonlyArray.FoodFondness(),
      foodRankings: faker.datatype.ReadonlyArray.FoodRankings(),
      ...overrides,
    };
  }
}
export const UserInSiteBuilder = new UserInSiteBuilderClass();
