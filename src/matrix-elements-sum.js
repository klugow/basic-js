const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mat) {
let arr = [];
let resalt = 0;
for (let z of mat) {
for (let i = 0; i < z.length; i++) {
if (!arr.includes(i)) {
resalt += z[i];}
if (z[i] === 0) {
arr.push(i);}}}
return resalt;}

module.exports = {
getMatrixElementsSum,
};


