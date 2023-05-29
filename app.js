const express = require("express");

const app = express();

app.use(express.json());

app.use("/user", require("./controllers/ControllerUser"));

// http://localhost:4000/user/yanzen
module.exports = app;
