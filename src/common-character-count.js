const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mappyOne = getMap(s1);
  let mappyTwo = getMap(s2);
  let res = 0;

  for (let entry of mappyOne) {
  if (mappyTwo.has(entry[0])) {
    res += Math.min(entry[1], mappyTwo.get(entry[0]))
    }
  }

  return res;
}

function getMap(z) {
  const mapp = new Map();

  for (let i = 0; i < z.length; i++) {
    const znak = z[i];

    if (mapp.has(znak)) {
      mapp.set(znak, mapp.get(znak) + 1);
    } else {
      mapp.set(znak, 1)
    }
  }

  return mapp;
}

module.exports = {
  getCommonCharacterCount
};

