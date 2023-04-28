import { UserInSite, UserFoodRanking } from "../utils/types";
export declare class UserRepository {
    #private;
    constructor();
    getUser(id: string): Promise<UserInSite | null>;
    getAllUserRankings(user: UserInSite): ReadonlyArray<UserFoodRanking>;
}
declare const _default: UserRepository;
export default _default;
