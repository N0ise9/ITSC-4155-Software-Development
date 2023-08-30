"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.about = exports.results = exports.thankyou = exports.survey = exports.signin = exports.registration = exports.profile = exports.index = exports.sendCuisines = exports.sendDishes = exports.sendFlavors = exports.flavors = exports.dishes = void 0;
const dishes = (req, res) => {
    res.render("dishes", { styles: "index", title: "Dishes" });
};
exports.dishes = dishes;
const flavors = (req, res) => {
    res.render("flavors", { styles: "guided-index", title: "Flavors" });
};
exports.flavors = flavors;
const sendFlavors = (req, res) => {
    req.session.flavorChoices = req.body;
    res.redirect("dishes");
};
exports.sendFlavors = sendFlavors;
const sendDishes = (req, res) => {
    req.session.dishChoices = req.body;
    res.redirect("results");
};
exports.sendDishes = sendDishes;
const sendCuisines = (req, res) => {
    req.session.cuisineChoices = req.body;
    res.redirect("flavors");
};
exports.sendCuisines = sendCuisines;
const index = (req, res) => {
    res.render("index", { styles: "index", title: "Let's Eat" });
};
exports.index = index;
const profile = (req, res) => {
    res.render("profile", { title: "Profile" });
};
exports.profile = profile;
const registration = (req, res) => {
    res.render("registration", { styles: "index", title: "Registration" });
};
exports.registration = registration;
const signin = (req, res) => {
    res.render("signin", { title: "Sign in" });
};
exports.signin = signin;
const survey = (req, res) => {
    res.render("survey", { libs: "survey", styles: "index", title: "Survey" });
};
exports.survey = survey;
const thankyou = (req, res) => {
    res.render("thankyou", { styles: "index", title: "Thank You!" });
};
exports.thankyou = thankyou;
const results = (req, res) => {
    res.render("results");
};
exports.results = results;
const about = (req, res) => {
    res.render("about", { styles: "index", title: "About" });
};
exports.about = about;
