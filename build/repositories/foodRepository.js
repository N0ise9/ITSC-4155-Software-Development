"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRepository = void 0;
const client_1 = require("@prisma/client");
class FoodRepository {
    #Food;
    constructor() {
        this.#Food = new client_1.PrismaClient().food;
    }
    getRanking(foodMMR) {
        return foodMMR.mmr;
    }
}
exports.FoodRepository = FoodRepository;
exports.default = new FoodRepository();
