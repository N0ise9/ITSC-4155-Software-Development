"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
class UserRepository {
    #User;
    constructor() {
        this.#User = new client_1.PrismaClient().user;
    }
    async #getUserInSite(user) {
        const userInSite = {
            cuisineMMR: [],
            foodMMR: [],
            id: user.id,
            userRanking: [],
        };
        return userInSite;
    }
    async getUser(id) {
        const user = await this.#User.findUnique({
            where: {
                id: id,
            },
        });
        if (user) {
            return this.#getUserInSite(user);
        }
        else {
            return null;
        }
    }
    getAllUserRankings(user) {
        return user.userRanking;
    }
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository();
