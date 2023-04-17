const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
let visot = array.filter((number) => 
number !== -1).sort((a, b) => a - b);
let result = [];
let sled = 0;
array.forEach((element, i) => {
if (element === -1) {
result.push(element);
} else {
result.push(visot[sled++]);}});
return result;}

module.exports = {
  sortByHeight,
};


