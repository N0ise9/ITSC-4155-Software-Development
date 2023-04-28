import express, { Response } from "express";

interface Request extends express.Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

export const dishes = (req: Request, res: Response) => {
  res.render("dishes", { styles: "index", title: "Dishes" });
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
  res.render("results");
};

export const about = (req: Request, res: Response) => {
  res.render("about", { styles: "index", title: "About" });
};
