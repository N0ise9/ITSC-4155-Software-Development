import express from "express";
import * as controller from "../controllers/testController";

const router = express.Router();
router.get("/", controller.index);
router.get("/profile", controller.profile);
router.get("/signin", controller.signin);
router.get("/signup", controller.signup);
router.get("/survey", controller.survey);
router.get("/thankyou", controller.thankyou);

export = router;
