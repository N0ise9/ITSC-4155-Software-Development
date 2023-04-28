import * as Factory from "factory.ts";
import { faker } from "@faker-js/faker";
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
  mmr: faker.datatype.number(),
});

const cuisineMock = Factory.Sync.makeFactory<CuisineMMR>({
  cuisineID: Factory.each(() => faker.lorem.words(3)),
  userID: Factory.each(() => faker.lorem.words(3)),
  mmr: faker.datatype.number(),
});

const userInSiteMock = Factory.Sync.makeFactory<UserInSite>({
  id: Factory.each(() => faker.lorem.words(3)),
  foodMMR: faker.helpers.arrayElement(),
  cuisineMMR: faker.helpers.arrayElement(),
  flavorMMR: faker.helpers.arrayElement(),
  userRanking: faker.helpers.arrayElement(),
});

const userFoodRankingMock = Factory.Sync.makeFactory<UserFoodRanking>({
  foodID: Factory.each(() => faker.lorem.words(3)),
  userID: Factory.each(() => faker.lorem.words(3)),
  ranking: faker.datatype.number(),
});

const FlavorMMRMock = Factory.Sync.makeFactory<FlavorMMR>({
  flavorID: Factory.each(() => faker.lorem.words(3)),
  userID: Factory.each(() => faker.lorem.words(3)),
  mmr: faker.datatype.number(),
});

describe("Algorithm", () => {
  it("Produces correct food mock.", async () => {
    expect(foodMock).not.toEqual(null);
  });
  it("Produces correct cuisine mock.", async () => {
    expect(cuisineMock).not.toEqual(null);
  });
  it("Produces correct UserFoodRanking mock.", async () => {
    expect(userFoodRankingMock).not.toEqual(null);
  });
  it("Produces correct FlavorMMR mock.", async () => {
    expect(FlavorMMRMock).not.toEqual(null);
  });
});
