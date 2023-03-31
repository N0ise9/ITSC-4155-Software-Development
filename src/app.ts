import express, { Application } from "express";
import path from "node:path";
import routes from "./routes/routes";
const express = require('express');
const morgan = require('morgan');


const registration = require("./routes/registration");
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user');
const session = require('express-session');

const flash = require('connect-flash');

const app: Application = express();
/* eslint-disable no-console */
export function test() {
  return "test";
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

//app.use("/", testRoutes);
app.use("/", routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running");
});
