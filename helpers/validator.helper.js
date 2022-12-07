const { UNIT_TYPES } = require("../models/temperature");

const validateMagnitude = (magnitude) => {
  return validateNumber(magnitude);
};

const validateNumber = (num) => {
  num = Number(num);
  if (isNaN(num)) {
    return null;
  } else {
    return num
  }
};


const validateUnit = (unit) => {
  let check = null;
  Object.keys(UNIT_TYPES).forEach(ut => {
    if (UNIT_TYPES[ut] === unit) {
      check =  unit;
    }
  })

  return check;
};

module.exports = {
  validateMagnitude,
  validateNumber,
  validateUnit
}
