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

ModelUser.edit = async (firstName, lastName, email) => {
  await config.connector("user").where({ email }).update({
    firstName,
    lastName,
  });

  return {
    firstName,
    lastName,
  };
};

module.exports = ModelUser;
