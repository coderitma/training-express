const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(9999, () => {
  console.log("Example app listening on port 3000!");
});
