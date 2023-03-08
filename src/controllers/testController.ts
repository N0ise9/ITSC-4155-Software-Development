import express, { Application, Request, Response, NextFunction } from "express";

export const index = (req: Request, res: Response) => {
  res.render("index");
};
