import express, { Response } from "express";
interface Request extends express.Request {
    session: any;
}
export declare const dishes: (req: Request, res: Response) => void;
export declare const flavors: (req: Request, res: Response) => void;
export declare const sendFlavors: (req: Request, res: Response) => void;
export declare const sendDishes: (req: Request, res: Response) => void;
export declare const sendCuisines: (req: Request, res: Response) => void;
export declare const index: (req: Request, res: Response) => void;
export declare const profile: (req: Request, res: Response) => void;
export declare const registration: (req: Request, res: Response) => void;
export declare const signin: (req: Request, res: Response) => void;
export declare const survey: (req: Request, res: Response) => void;
export declare const thankyou: (req: Request, res: Response) => void;
export declare const results: (req: Request, res: Response) => void;
export declare const about: (req: Request, res: Response) => void;
export {};
