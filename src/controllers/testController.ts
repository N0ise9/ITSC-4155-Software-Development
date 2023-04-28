import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { searchYelp } from "../services/yelp/searchYelp";

const prisma = new PrismaClient();

export const dishes = async (req: Request, res: Response) => {
  const posts = await prisma.food.findMany({
    // cuisine is hardcode, needs to
    where: { cuisine: 21 },
  });
  res.render("dishes", { posts, styles: "index", title: "Dishes" });
};

export const flavors = (req: Request, res: Response) => {
  res.render("flavors", { styles: "guided-index", title: "Flavors" });
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
  // alfredo should be the result of the algorithm
  const results = searchYelp("alfredo");
  results.then(function (result) {
    res.render("results", { libs: results, result, title: "Results" });
  });
};

export const about = (req: Request, res: Response) => {
  res.render("about", { styles: "index", title: "About" });
};
