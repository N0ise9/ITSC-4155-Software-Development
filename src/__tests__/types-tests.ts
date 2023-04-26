import * as Factory from "factory.ts";
import { faker } from '@faker-js/faker';
import { UserInSite } from "../utils/types";
import { UserFoodRanking } from "../utils/types";
import { FoodMMR } from "../utils/types";
import { CuisineMMR } from "../utils/types";
import { FlavorMMR } from "../utils/types";
import { Food } from "../utils/types";
import { RestaurantData } from "../utils/types";

const foodMock = Factory.Sync.makeFactory<FoodMMR>({
    foodID: Factory.each(() => faker.lorem.words(3)), 
    userID: Factory.each(() => faker.lorem.words(3)),
    mmr: faker.datatype.number()
  });

const cuisineMock = Factory.Sync.makeFactory<CuisineMMR>({
  cuisineID: Factory.each(() => faker.lorem.words(3)),
  userID: Factory.each(() => faker.lorem.words(3)),
  mmr: faker.datatype.number()
});


  const userInSiteMock = Factory.Sync.makeFactory<UserInSite>({
    id: Factory.each(() => faker.lorem.words(3)),
    foodMMR: faker.foodMMR.array(),
    cuisineMMR: faker.cuisineMMR.array(),
    flavorMMR: faker.flavorMMR.array(),
    userRanking: faker.userRanking.array()
  });