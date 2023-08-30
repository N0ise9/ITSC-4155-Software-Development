import { UserInSite } from "../utils/types";
import { calculateCuisineMatches } from "../services/algorithm";

describe("calculateCuisineMatches", () => {
  const user: UserInSite = {
    id: "1",
    foodMMR: [],
    cuisineMMR: [
      { cuisineID: "0", userID: "1", mmr: 2000 },
      { cuisineID: "1", userID: "1", mmr: 1800 },
      { cuisineID: "2", userID: "1", mmr: 1600 },
    ],
    flavorMMR: [],
    userRanking: [],
  };

  it("should return an array with the correct length", () => {
    const result = calculateCuisineMatches(user);
    expect(result.length).toEqual(user.cuisineMMR.length);
  });

  it("should return an array of probabilities between 0 and 2", () => {
    const result = calculateCuisineMatches(user);
    result.forEach((probability) => {
      expect(probability).toBeGreaterThanOrEqual(0);
      expect(probability).toBeLessThanOrEqual(2);
    });
  });
});
