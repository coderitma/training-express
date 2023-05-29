const config = require("../config");

const ModelUser = {};

ModelUser.create = async (firstName, lastName, email, password) => {
  await config.connector("user").insert({
    firstName,
    lastName,
    email,
    password,
  });

  return {
    firstName,
    lastName,
    email,
  };
};

module.exports = ModelUser;
