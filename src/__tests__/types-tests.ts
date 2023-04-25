import * as Factory from "factory.ts";
import { faker } from '@faker-js/faker';
import { UserInSite } from "../utils/types";
import { UserFoodRanking } from "../utils/types";
import { FoodMMR } from "../utils/types";
import { CuisineMMR } from "../utils/types";
import { FlavorMMR } from "../utils/types";
import { Food } from "../utils/types";
import { RestaurantData } from "../utils/types";

const MockFoodMMR = Factory.Sync.makeFactory<FoodMMR>({
    foodID: Factory.each(() => faker.lorem.words(3)), 
    userID: Factory.each(() => faker.lorem.words(3)),
    mmr: faker.datatype.number()
  });

  const MockUserInSite = Factory.Sync.makeFactory<UserInSite>({
    id: Factory.each(() => faker.lorem.words(3)),
    foodMMR: faker.datatype.array()
    cuisineMMR: Array<CuisineMMR>;
    flavorMMR: Array<FlavorMMR>;
    userRanking: Array<UserFoodRanking>;
  });