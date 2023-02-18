import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import methodOverride from "method-override";
import path from "node:path";
const testRoutes = require("./routes/testRoutes");
const app = express();

let port = 3000;
let host = "localhost";
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));

app.use("/", testRoutes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
