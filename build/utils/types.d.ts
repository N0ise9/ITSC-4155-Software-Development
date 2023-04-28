export declare const enum Flavor {
    Sweet = 0,
    Spicy = 1,
    Salty = 2,
    Savory = 3,
    Bitter = 4,
    Sour = 5,
    Hot = 6,
    Cold = 7,
    Meaty = 8
}
export declare const enum Cuisine {
    CentralAfrican = 0,
    EastAfrican = 1,
    NorthAfrican = 2,
    SouthernAfrican = 3,
    WestAfrican = 4,
    American = 5,
    SouthernAmerican = 6,
    MidwesternAmerican = 7,
    SoulFood = 8,
    NewEngland = 9,
    WesternAmerican = 10,
    SouthwesternAmerican = 11,
    FusionAmerican = 12,
    Mexican = 13,
    CentralAmerican = 14,
    SouthAmerican = 15,
    Caribbean = 16,
    Jewish = 17,
    Korean = 18,
    Chinese = 19,
    Japanese = 20,
    Indian = 21,
    SouthAsian = 22,
    EastAsian = 23,
    Pakistani = 24,
    SoutheastAsian = 25,
    Indonesian = 26,
    WestAsian = 27,
    CentralEuropean = 28,
    German = 29,
    EasternEuropean = 30,
    British = 31,
    NorthernEuropean = 32,
    Nordic = 33,
    SouthernEuropean = 34,
    Italian = 35,
    Greek = 36,
    WesternEuropean = 37,
    Australian = 38,
    Oceanic = 39,
    Polynesian = 40,
    Micronesian = 41,
    Melanesian = 42,
    FastFood = 43
}
export interface UserInSite {
    id: string;
    foodMMR: Array<FoodMMR>;
    cuisineMMR: Array<CuisineMMR>;
    flavorMMR: Array<FlavorMMR>;
    userRanking: Array<UserFoodRanking>;
}
export interface UserFoodRanking {
    foodID: string;
    userID: string;
    ranking?: number;
}
export interface FlavorMMR {
    flavorID: string;
    userID: string;
    mmr: number;
}
export interface CuisineMMR {
    cuisineID: string;
    userID: string;
    mmr: number;
}
export interface FoodMMR {
    foodID: string;
    userID: string;
    mmr: number;
}
export interface Food {
    id: string;
    cuisine: Cuisine;
    flavor: ReadonlyArray<Flavor>;
    name: string;
}
export interface UpdateUserInSiteInput {
    foodMMR?: Array<FoodMMR>;
    cuisineMMR?: CuisineMMR;
    flavorMMR?: Array<FlavorMMR>;
    userRanking?: Array<UserFoodRanking>;
}
