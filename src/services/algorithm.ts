import { UserInSite, Food, Cuisine, Flavor, FoodRankings, FoodFondness } from "../utils/types";

interface ProbabilityDecimalResults {
  cuisineProbabilityDecimal: number;
  flavorProbabilityDecimal: number;
  foodProbabilityDecimal: number;
}

export function calculateProbabilityDecimals(user: UserInSite) {
  for (let i = 0; i <= user.foodRankings?.length; i++) {
    user.foodRankings?.forEach((food) => {
      for (let i = 0; i <= user.foodRankings?.length; i++) {
        calcprobabilityDecimals(food.rank, user.foodRankings[i - 1].rank);
      }
    });
  }
  const calcprobabilityDecimals = (current: number, previous: number): number => {
    const difference = (previous - current) / 400;
    const power = Math.pow(10, difference) + 1;
    const probabilityDecimal = 1 / power;
    console.log("\n\nDifference: " + difference + "\nPower: " + power + "\nProbDecimal:" + probabilityDecimal);
    return probabilityDecimal;
  };

  return;
}

interface TeamProbabilityDecimalResult {
  blueProbabilityDecimal: number;
  orangeProbabilityDecimal: number;
}

// export function calculateProbabilityDecimal0(teams: ActiveMatchTeams): TeamProbabilityDecimalResult {
//   const blueTeamMMR = teams.blueTeam.reduce((totalMMR, ballChaser) => totalMMR + ballChaser.mmr, 0);
//   const orangeTeamMMR = teams.orangeTeam.reduce((totalMMR, ballChaser) => totalMMR + ballChaser.mmr, 0);

//   const calcTeamProbabilityDecimal = (winnerMMR: number, loserMMR: number): number => {
//     const difference = (loserMMR - winnerMMR) / 400;
//     const power = Math.pow(10, difference) + 1;
//     const probabilityDecimal = 1 / power;
//     return probabilityDecimal;
//   };

//   return {
//     blueProbabilityDecimal: calcTeamProbabilityDecimal(blueTeamMMR, orangeTeamMMR),
//     orangeProbabilityDecimal: calcTeamProbabilityDecimal(orangeTeamMMR, blueTeamMMR),
//   };
// }

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
