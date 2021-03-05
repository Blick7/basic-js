const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
  if (typeof sample !== 'string' || isNaN(sample) || sample > 15 || sample <= 0)
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sample)) / (0.693 / HALF_LIFE_PERIOD));
};
console.log(module.exports('-1.21'));