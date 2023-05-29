const config = {};

config.connector = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "db_project",
  },
});

module.exports = config;
