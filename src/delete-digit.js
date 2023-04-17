const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = String(n).split('');
  let maximus = 0;
  
  for (let i = 0; i < number.length; i++) {
    let array = [...number];
    array.splice(i, 1)
    let nam = parseInt(array.join(''));
    if (nam > maximus) {
      maximus = nam;
    }
  }
  return maximus;

}
module.exports = {
  deleteDigit
};
