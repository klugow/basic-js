const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const mapppy = new Map();

  for (let domain of domains) {
    let string = '';
    let array = domain.split('.').reverse();

    for (let z of array) {
      string = `${string}.${z}`;
      if (mapppy.has(string)) {
        mapppy.set(string, mapppy.get(string) + 1);
      } else {
        mapppy.set(string, 1);
      }
    }
  }

  let resualt = {};
  for (let entry of mapppy) {
    resualt[entry[0]] = entry[1];
  }

  return resualt;
}

module.exports = {
  getDNSStats
};