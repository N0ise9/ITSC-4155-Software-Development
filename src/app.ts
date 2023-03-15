import express, { Application } from "express";
import path from "node:path";
import routes from "./routes/testRoutes";

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//app.use("/", testRoutes);
app.use("/", routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running");
});
