const express = require("express");
const dotenv = require("dotenv").config();

async function main() {
  const app = express();
  require("./config/sequelize.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    return res.status(404).json({
      Message: "not founde routis",
    });
  });
  app.use((err, req, res, next) => {
    let status = err?.status ?? 500;
    const message = err?.message ?? "invalideerrorHandLLer";
    return res.status(status).json({
      message,
    });
  });
  let port = process.env.PORT ?? 5000;
  app.listen(port, () => {
    console.log("server run: http://localhost:" + port);
  });
}
main()
