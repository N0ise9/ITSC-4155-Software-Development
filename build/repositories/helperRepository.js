"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfFoodMatch = void 0;
function checkIfFoodMatch(user, food, cuisine, flavor) {
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
    }
    else if (userCuisineMatch === undefined) {
        console.warn("No matching user - cuisine.");
        return false;
    }
    else if (userFlavorMatch === undefined) {
        console.warn("No matching user - flavor.");
        return false;
    }
    return true;
}
exports.checkIfFoodMatch = checkIfFoodMatch;
