/* eslint-disable max-len */
import { UserInSite } from "../utils/types";

export function calculateCuisineMatches(user: UserInSite): number[] {
  const calcProbabilityDecimal = (current: number, previous: number): number => {
    const difference = (previous - current) / 400;
    const power = Math.pow(10, difference) + 1;
    const probabilityDecimal = 1 / power;
    // console.log("\n\nDifference: " + difference + "\nPower: " + power + "\nProbDecimal:" + probabilityDecimal);
    return probabilityDecimal * 2;
  };

  const mmrArray = [];
  const cuisineList = user.cuisineMMR;

  const orderedList = cuisineList.sort((a, b) => b.mmr - a.mmr);
  const first = orderedList[0];
  for (let i = 0; i < orderedList.length; i++) {
    if (i == 0) {
      mmrArray[i] = calcProbabilityDecimal(first.mmr, first.mmr);
    } else {
      mmrArray[i] = calcProbabilityDecimal(first.mmr, orderedList[i].mmr);
    }
  }
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
