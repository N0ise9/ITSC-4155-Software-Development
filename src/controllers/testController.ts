import express, { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { searchYelp } from "../services/yelp/searchYelp";
import {UserInSite, Flavor, Cuisine, FlavorMMR, CuisineMMR} from "../utils/types";
import {calculateCuisineMatches, calculateFlavorMatches} from "../services/algorithm";

interface Request extends express.Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

const prisma = new PrismaClient();

export const dishes = async (req: Request, res: Response) => {
  const flavors: Array<number> = Object.values(req.session.flavorChoices);
  const cuisines: Array<number> = Object.values(req.session.cuisineChoices);
  const queryFlavors: Array<number> = [];
  const queryCuisines: Array<number> = [];
  flavors.forEach(flavor => {
    queryFlavors.push(Number(flavor));
  });
  cuisines.forEach(cuisine => {
    queryCuisines.push(Number(cuisine));
  });
  const posts = await prisma.food.findMany({
    where: {
      cuisine: {in: queryCuisines},
      flavor: {in: queryFlavors},
    }
  });
  res.render("dishes", { posts, styles: "index", title: "Dishes" });
};

export const flavors = (req: Request, res: Response) => {
  res.render("flavors", { styles: "guided-index", title: "Flavors" });
};

export const sendFlavors = (req: Request, res: Response) => {
  req.session.flavorChoices = req.body;
  res.redirect("dishes");
};

export const sendDishes = (req: Request, res: Response) => {
  req.session.dishChoices = req.body;
  res.redirect("results");
};

export const sendCuisines = (req: Request, res: Response) => {
  req.session.cuisineChoices = req.body;
  res.redirect("flavors");
};

export const index = (req: Request, res: Response) => {
  res.render("index", { styles: "index", title: "Let's Eat" });
};

export const profile = (req: Request, res: Response) => {
  res.render("profile", { title: "Profile" });
};

export const registration = (req: Request, res: Response) => {
  res.render("registration", { styles: "index", title: "Registration" });
};

export const signin = (req: Request, res: Response) => {
  res.render("signin", { title: "Sign in" });
};

export const survey = (req: Request, res: Response) => {
  res.render("survey", { libs: "survey", styles: "index", title: "Survey" });
};

export const thankyou = (req: Request, res: Response) => {
  res.render("thankyou", { styles: "index", title: "Thank You!" });
};

export const results = (req: Request, res: Response) => {
  const cuisineChoices: Array<CuisineMMR> = [];
  const flavorChoices: Array<FlavorMMR> = [];
  const theCuisines: object = req.session.cuisineChoices;
  const theFlavors: object = req.session.flavorChoices;
  const theDishes: object = req.session.dishChoices;
  for (const cuisine in theCuisines) {
    cuisineChoices.push({
      cuisineID: theCuisines[cuisine as keyof typeof theCuisines],
      userID: "test",
      mmr: 1100  
    });
  }
  for (const flavor in theFlavors) {
    flavorChoices.push({
      flavorID: theFlavors[flavor as keyof typeof theFlavors],
      userID: "test",
      mmr: 1100  
    });
  }
  for (const dish in theDishes) {
    const id: string = dish.split("(")[0];
    cuisineChoices.forEach(cuisine => {
      if (cuisine.cuisineID === id) {
        cuisine.mmr = cuisine.mmr + (Number(theDishes[dish as keyof typeof theDishes]) * 20);
      }
    })
  }
  console.log(cuisineChoices);
  const theUser: UserInSite = {id: "test", cuisineMMR: cuisineChoices, flavorMMR: flavorChoices};
  calculateCuisineMatches(theUser);
  console.log(theUser.cuisineMMR[0]);
  searchYelp("alfredo")
  .then(function (result) {
    res.render("results", { libs: results, result, title: "Results" });
  });
};

export const about = (req: Request, res: Response) => {
  res.render("about", { styles: "index", title: "About" });
};
