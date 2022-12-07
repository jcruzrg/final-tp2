const express = require("express");
const cors = require("cors");
const { ROUTES } = require("./config/routes.config");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

ROUTES.forEach((route) => {
  app.use(route.path, route.route);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
