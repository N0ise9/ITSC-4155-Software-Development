// Will be reworked for user prefrences

interface TeamProbabilityDecimalResult {
  blueProbabilityDecimal: number;
  orangeProbabilityDecimal: number;
}

export function calculateProbabilityDecimal(teams: ActiveMatchTeams): TeamProbabilityDecimalResult {
  const blueTeamMMR = teams.blueTeam.reduce((totalMMR, ballChaser) => totalMMR + ballChaser.mmr, 0);
  const orangeTeamMMR = teams.orangeTeam.reduce((totalMMR, ballChaser) => totalMMR + ballChaser.mmr, 0);

  const calcTeamProbabilityDecimal = (winnerMMR: number, loserMMR: number): number => {
    const difference = (loserMMR - winnerMMR) / 400;
    const power = Math.pow(10, difference) + 1;
    const probabilityDecimal = 1 / power;
    return probabilityDecimal;
  };

  return {
    blueProbabilityDecimal: calcTeamProbabilityDecimal(blueTeamMMR, orangeTeamMMR),
    orangeProbabilityDecimal: calcTeamProbabilityDecimal(orangeTeamMMR, blueTeamMMR),
  };
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
