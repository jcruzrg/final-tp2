const temperatureRepository = require("../repositories/temperature/temperature.repository");

/**
 * Get all temperatures
 */
const getTemperatures = async (req, res) => {
  try {
    const query = req.query;
    const r = temperatureRepository.getAll(query);
    res.status(r.status).json(r);
  } catch (error) {
    res.status(422).json(error);
  }
};

/**
 * Add new temperature
 */
const newTemperature = async (req, res) => {
  try {
    const r = temperatureRepository.save(req.body);
    res.status(r.status).json(r);
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = {
  getTemperatures,
  newTemperature,
};
