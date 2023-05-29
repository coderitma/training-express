const ModelUser = require("../models/ModelUser");

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

ControllerUser.post("/", async (req, res) => {
  const payload = req.body;

  const result = await ModelUser.create(
    payload.firstName,
    payload.lastName,
    payload.email,
    payload.password
  );

  return res.status(201).json(result);
});

module.exports = ControllerUser;
