import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.render("index");
};

export const test = (req: Request, res: Response) => {
  res.render("test");
};
