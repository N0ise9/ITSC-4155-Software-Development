import express, { Application } from "express";
import path from "node:path";
import routes from "./routes/routes";

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
app.use(express.urlencoded({ extended: true }));

//app.use("/", testRoutes);
app.use("/", routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running");
});
