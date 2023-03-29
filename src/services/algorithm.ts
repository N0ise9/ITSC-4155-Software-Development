/* eslint-disable max-len */
import { UserInSite, Food, FoodRankings, FoodFondness } from "../utils/types";
import { checkIfFoodMatch, getRanking, getAllUserRankings } from "../repositories/algorithmRepository";

interface ProbabilityDecimalResults {
  cuisineProbabilityDecimal: number;
  flavorProbabilityDecimal: number;
  foodProbabilityDecimal: number;
}

export async function calculateProbabilityDecimals(
  user: UserInSite,
  food: Food,
  foodFondness: FoodFondness,
  foodRankings: FoodRankings
): Promise<ProbabilityDecimalResults | undefined> {
  const userChoice = await checkIfFoodMatch(user, food, foodFondness, foodRankings);
  if (!userChoice) {
    console.warn("The user and food do not match.");
    return;
  }

  const calcprobabilityDecimal = (current: number, previous: number): number => {
    const difference = (previous - current) / 400;
    const power = Math.pow(10, difference) + 1;
    const probabilityDecimal = 1 / power;
    // console.log("\n\nDifference: " + difference + "\nPower: " + power + "\nProbDecimal:" + probabilityDecimal);
    return probabilityDecimal;
  };

  const foodRank = getRanking(foodRankings);
  const userRankings = getAllUserRankings(user);

  userRankings.forEach((ranking) => {
    // Result of comparison between one given food and current iteration of all user ranked foods.
    // Comparison is checked as if given food is more appealing than all other user ranked foods.

    // Resulting Probability Decimal should be subject to further algorithmic computation - resulting decimal "won" against all others,
    // therefore decimal is significantly greater than the others. This results in a much higher score than it should have.
    // When calculating how much score to give, foodFondness should come into factor the weight of items and give a higher score.
    // Maybe filtering userRankings by highest rank first, before comparisons, should be used.

    // Add a check to not compare if foodRankings.id and ranking.id are the same.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = calcprobabilityDecimal(foodRank, ranking.rank);
  });

  return;
}

export function calculateMMR(calculatedProbabilityDecimal: number): number {
  let mmr = (1 - calculatedProbabilityDecimal) * 20;
  mmr = Math.min(15, mmr);
  mmr = Math.max(5, mmr);

  return Math.round(mmr);
}

export function calculateProbability(calculatedProbabilityDecimal: number): number {
  const probability = calculatedProbabilityDecimal * 100;
  return Math.round(probability);
}
