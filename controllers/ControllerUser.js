const ControllerUser = require("express").Router();

ControllerUser.get("/", (req, res) => {
  return res.status(200).json({
    username: "budi",
    email: "budi@doremi.com",
  });
});

ControllerUser.get("/yanzen", (req, res) => {
  return res.status(200).json({
    username: "yanzenoid",
    email: "yanzenoid@doremi.com",
  });
});

module.exports = ControllerUser;
