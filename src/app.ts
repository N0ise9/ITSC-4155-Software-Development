import express from "express";
import morgan from "morgan";
import methodOverride from "method-override"

const app = express();

let port = 3000;
let host = "localhost";
// app.set("view engine", ejs);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
