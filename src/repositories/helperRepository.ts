import { Cuisine, Flavor, Food, FoodMMR, UserFoodRanking, UserInSite } from "../utils/types";

export function checkIfFoodMatch(user: UserInSite, food: Food, cuisine: Cuisine, flavor: Flavor): boolean {
  if (!user.userRanking) {
    console.warn("User has not selected any food.");
    return false;
  }

  const userFoodMatch = user.userRanking.find((userChoice) => userChoice.foodID === food.id);
  const userCuisineMatch = user.cuisineMMR.find((userChoice) => userChoice.cuisineID === cuisine.toString());
  const userFlavorMatch = user.flavorMMR.find((userChoice) => userChoice.flavorID === flavor.toString());
  if (userFoodMatch === undefined) {
    console.warn("No matching user - food ranking.");
    return false;
  } else if (userCuisineMatch === undefined) {
    console.warn("No matching user - cuisine.");
    return false;
  } else if (userFlavorMatch === undefined) {
    console.warn("No matching user - flavor.");
    return false;
  }
  return true;
}

export function getRanking(foodMMR: FoodMMR): number {
  return foodMMR.mmr;
}

export function getAllUserRankings(user: UserInSite): ReadonlyArray<UserFoodRanking> {
  return user.userRanking;
}