import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.render("index");
};

export const profile = (req: Request, res: Response) => {
  res.render("profile");
};

export const signin = (req: Request, res: Response) => {
  res.render("signin");
};

export const signuplogin = (req: Request, res: Response) => {
  res.render("signuplogin");
};

export const survey = (req: Request, res: Response) => {
  res.render("survey");
};

export const thankyou = (req: Request, res: Response) => {
  res.render("thankyou");
};