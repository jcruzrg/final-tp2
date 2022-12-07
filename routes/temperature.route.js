const express = require("express");
const router = express.Router();
const {
  getTemperatures,
  newTemperature,
} = require("../controllers/temperature.controller");

router.get("/", getTemperatures);

router.post("/", newTemperature);

module.exports = router;
