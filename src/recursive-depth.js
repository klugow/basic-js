const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
calculateDepth(array) {
let dep = 1;
let curDep = 0;
for (const z of array) {
if (Array.isArray(z)) {
curDep = Math.max(curDep, this.calculateDepth(z));}}
dep += curDep;
return dep;}}

module.exports = {
  DepthCalculator,
};
