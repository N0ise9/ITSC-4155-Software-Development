import express from "express";
import * as controller from "../controllers/registration";

const router = express.Router();

//GET /users/new: send html form for creating a new user account
router.get("/registration", controller.registration);

//POST /users: create a new user account
router.post("/", controller.create);

//GET /users/login: send html for logging in
router.get("/login",  controller.getUserLogin);

//POST /users/login: authenticate user's login
router.post("/login",  controller.login);

//GET /users/profile: send user's profile page
router.get("/profile", controller.profile);

//POST /users/logout: logout a user
router.get("/logout", controller.logout);

export = router;