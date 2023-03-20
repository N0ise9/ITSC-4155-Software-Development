import express from "express";
import * as controller from "../controllers/testController";

const router = express.Router();
router.get("/", controller.index);
router.get("/dishes", controller.dishes);
router.get("/flavors", controller.flavors);
router.get("/profile", controller.profile);
router.get("/registration", controller.registration);
router.get("/signin", controller.signin);
router.get("/survey", controller.survey);
router.get("/thankyou", controller.thankyou);

export = router;
