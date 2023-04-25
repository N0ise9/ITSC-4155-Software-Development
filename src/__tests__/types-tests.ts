import * as Factory from "factory.ts";
import { faker } from '@faker-js/faker';
import { FoodMMR } from "../utils/types";

const MockFoodMMR = Factory.Sync.makeFactory<FoodMMR>({
    foodID: Factory.each(() => faker.lorem.words(3)), 
    userID: Factory.each(() => faker.lorem.words(3)),
    mmr: faker.datatype.number()
  });

  const UserInSiteMock = Factory.Sync.makeFactory<UserInSite>({
    id: Factory.each(() => faker.lorem.words(3)),
    foodMMR: faker.datatype.array()
    cuisineMMR: Array<CuisineMMR>;
    flavorMMR: Array<FlavorMMR>;
    userRanking: Array<UserFoodRanking>;
  });