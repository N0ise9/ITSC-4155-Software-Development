import { Request, Response } from "express";

export const dishes = (req: Request, res: Response) => {
  res.render("dishes", { styles: "guided-style", title: "Dishes" });
};

export const flavors = (req: Request, res: Response) => {
  res.render("flavors", { styles: "guided-style", title: "Flavors" });
};

export const index = (req: Request, res: Response) => {
  res.render("index", { styles: "index", title: "Let's Eat" });
};

export const profile = (req: Request, res: Response) => {
  res.render("profile", { title: "Profile" });
};

export const registration = (req: Request, res: Response) => {
  res.render("registration", { styles: "registration", title: "Registration" });
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

export const about = (req: Request, res: Response) => {
  res.render("about", { styles: "about", title: "About" });
};
