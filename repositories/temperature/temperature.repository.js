const {
  validateMagnitude,
  validateUnit,
  validateNumber,
} = require("../../helpers/validator.helper");
const { Temperature } = require("../../models/temperature");
const { StorageFactory } = require("../storage/storage-factory.repository");

class TemperatureRepository {
  TAG = "TemperatureRepository -";

  constructor(type = "memory") {
    this.storage = new StorageFactory(type).storage();
    console.log(this.TAG, "load storage: ", this.storage);
  }

  /**
   * Get all temperatures
   *
   * @param query Obj with max and min param
   */
  getAll(query) {
    try {
      const {max, min} = query;

      let errorMsg = [];
      let temperatures = this.storage;

      if (min && validateNumber(min)) {
        temperatures = temperatures.filter(s => s.magnitude > min);
      } else if (min) {
        errorMsg.push("Min value is invalid");
      }

      if (max && validateNumber(max)) {
        temperatures = temperatures.filter(s => s.magnitude < max);
      } else if (max) {
        errorMsg.push("Max value is invalid");
      }

      if (errorMsg.length) {
        return {
          errorMsg: errorMsg.join(' - '),
          status: 400,
        };
      }

      return {
        data: temperatures,
        msg: "Get all temperatures successfully",
        status: 200,
      };
    } catch (error) {
      console.error(this.TAG, "getAll - ERROR: ", error);
      return {
        errorMsg: "Sorry, something went wrong",
        status: 500,
      };
    }
  }

  /**
   * Save new temperature
   * @param body Temperature model
   */
  save(body) {
    if (!body || !Object.keys(body).length) {
      return {
        errorMsg: "Missing body params",
        status: 400,
      };
    }

    try {
      const magnitude = validateMagnitude(body.magnitude);

      if (!magnitude) {
        return {
          errorMsg: "Invalid magnitude param",
          status: 400,
        };
      }

      const unit = validateUnit(body.unit);

      if (!unit) {
        return {
          errorMsg: "Invalid unit param",
          status: 400,
        };
      }

      let temperature;
      temperature = new Temperature(magnitude, unit);
      this.storage.push(temperature);

      return {
        data: temperature,
        msg: "Temperature saved successfully",
        status: 200,
      };
    } catch (error) {
      console.error(this.TAG, "save - ERROR: ", error);
      return {
        errorMsg: "Sorry, something went wrong",
        status: 500,
      };
    }
  }
}

module.exports = new TemperatureRepository();
