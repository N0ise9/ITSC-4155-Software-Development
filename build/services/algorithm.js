"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFlavorMatches = exports.calculateCuisineMatches = void 0;
function calculateCuisineMatches(user) {
    const calcProbabilityDecimal = (current, previous) => {
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
        }
        else {
            mmrArray[i] = calcProbabilityDecimal(first.mmr, orderedList[i].mmr);
        }
    }
    return mmrArray;
}
exports.calculateCuisineMatches = calculateCuisineMatches;
function calculateFlavorMatches(user) {
    const calcProbabilityDecimal = (current, previous) => {
        const difference = (previous - current) / 400;
        const power = Math.pow(10, difference) + 1;
        const probabilityDecimal = 1 / power;
        // console.log("\n\nDifference: " + difference + "\nPower: " + power + "\nProbDecimal:" + probabilityDecimal);
        return probabilityDecimal * 2;
    };
    const mmrArray = [];
    const flavorList = user.flavorMMR;
    const orderedList = flavorList.sort((a, b) => b.mmr - a.mmr);
    const first = orderedList[0];
    for (let i = 0; i < orderedList.length; i++) {
        if (i == 0) {
            mmrArray[i] = calcProbabilityDecimal(first.mmr, first.mmr);
        }
        else {
            mmrArray[i] = calcProbabilityDecimal(first.mmr, orderedList[i].mmr);
        }
    }
    return mmrArray;
}
exports.calculateFlavorMatches = calculateFlavorMatches;
