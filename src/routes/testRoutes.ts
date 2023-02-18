import express from "express";
//import controller from "../controllers/testController";
const controller = require("../controllers/testController")
const router = express.Router();

router.get('/', controller.index)

module.exports = router;