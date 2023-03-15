import express from "express";
import * as controller from "../controllers/testController";

const router = express.Router();
router.get("/", controller.index);
router.get("/test", controller.test);

export = router;
