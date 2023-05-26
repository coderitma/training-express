const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const Connector = require("./models/connector");

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
  await Connector("barang").insert({
    namaBarang: "Huion Tablet",
    harga: 134000,
  });

  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(9999, () => {
  console.log("Example app listening on port 3000!");
});
