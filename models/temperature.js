const UNIT_TYPES = {
	celcius: "celcius",
	farenheit: "farenheit",
	kelvin: "kelvin",
}

class Temperature {
  constructor(magnitude, unit) {
    this.id = new Date().getTime(); // Generate automatically id
    this.magnitude = magnitude;
    this.unit = unit;
  }

  getId() {
    return this.id;
  }

  getMagnitude() {
    return this.magnitude
  }

  getUnit() {
    return this.unit;
  }
}

module.exports = {
  Temperature,
  UNIT_TYPES,
};
