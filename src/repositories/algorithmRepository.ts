import { UserInSite, FoodFondness, FoodRankings, Food } from "../utils/types";

interface MatchingFood {
  userFood: string;
  fondnessFood: string;
  rankingFood: string;
}
export function getFood(
  user: UserInSite,
  food: Food,
  foodFondness: FoodFondness,
  foodRanking: FoodRankings
): MatchingFood | undefined {
  if (!user.foodChoices) {
    console.warn("User has not selected any food.");
    return;
  }
  const usersChoice = user.foodChoices?.find((userChoice) => userChoice === food);
  const fondnessMatch = user.foodFondness.find((userChoice) => userChoice === foodFondness);
  const rankingMatch = user.foodRankings.find((userChoice) => userChoice === foodRanking);
  if (usersChoice === undefined) {
    console.warn("No matching user food choice.");
  } else if (fondnessMatch === undefined) {
    console.warn("No matching user food fondness.");
  } else if (rankingMatch === undefined) {
    console.warn("No matching user food ranking.");
  } else {
    const userFood = usersChoice.id;
    const fondnessFood = fondnessMatch.id;
    const rankingFood = rankingMatch.id;
    return {
      fondnessFood,
      rankingFood,
      userFood,
    };
  }
}
