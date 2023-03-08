import express, { Application } from "express";
import path from "node:path";
import testRoutes from "./routes/testRoutes";

//const testRoutes = require("./routes/testRoutes");
const app: Application = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", testRoutes);

app.listen(3000, () => console.log("Server is running"));
