const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "mariadb",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "0026061155",
  database: "express-shop",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database MariaDB connected");
  })
  .catch((err) => {
    console.log("database MariaDB not connected", err);
  });

module.exports = sequelize;
