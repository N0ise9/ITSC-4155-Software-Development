import { UserInSite, FoodFondness, FoodRankings, Food } from "../utils/types";

export async function checkIfFoodMatch(
  user: UserInSite,
  food: Food,
  foodFondness: FoodFondness,
  foodRanking: FoodRankings
): Promise<boolean> {
  if (!user.foodChoices) {
    console.warn("User has not selected any food.");
    return false;
  }
  const usersChoice = user.foodChoices.find((userChoice) => userChoice === food);
  const fondnessMatch = user.foodFondness.find((userChoice) => userChoice === foodFondness);
  const rankingMatch = user.foodRankings.find((userChoice) => userChoice === foodRanking);
  if (usersChoice === undefined) {
    console.warn("No matching user food choice.");
    return false;
  } else if (fondnessMatch === undefined) {
    console.warn("No matching user food fondness.");
    return false;
  } else if (rankingMatch === undefined) {
    console.warn("No matching user food ranking.");
    return false;
  } else if (user.id !== foodFondness.user && user.id !== foodRanking.user) {
    console.warn("The user does not match the given food.");
    return false;
  } else if (foodFondness.id !== foodRanking.id) {
    console.warn("The foodFondness and foodRanking does not match.");
    return false;
  } else {
    user.foodChoices?.forEach((userFood) => {
      if (userFood.id !== foodFondness.id && userFood.id !== foodRanking.id) {
        console.warn("User food choices do not match FoodFondness or FoodRanking type");
        return false;
      }
    });
    return true;
  }
}

export function getRanking(foodRankings: FoodRankings): number {
  return foodRankings.rank;
}

export function getAllUserRankings(user: UserInSite): ReadonlyArray<FoodRankings> {
  return user.foodRankings;
}

export function getFondness(foodFondness: FoodFondness): number | undefined {
  if (foodFondness.fondness === undefined) {
    console.warn("The user has not selected a fondness level for this food.");
    return;
  } else {
    return foodFondness.fondness;
  }
}
