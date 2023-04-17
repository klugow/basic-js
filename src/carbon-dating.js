const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
let res = false;
if (typeof sampleActivity === 'string'
&& isFinite(sampleActivity)) {
let active = parseFloat(sampleActivity);
if (active > 0 && active < MODERN_ACTIVITY) {
zeit = Math.log(MODERN_ACTIVITY / active) / (0.693 / HALF_LIFE_PERIOD);
res = Math.ceil(zeit);
    }
  }

  return res;
}


module.exports = {
  dateSample
};
