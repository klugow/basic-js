const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
let seson = ['winter', 'spring', 'summer', 'autumn'];
if (data instanceof Date) {
try { data.valueOf(); } 
catch { throw new Error('Invalid date!'); }
let mon = data.getMonth();
let z = Math.floor(((mon + 1) % 12) / 3);
return seson[z]; } 
else if (data === undefined) {
return 'Unable to determine the time of year!';}
throw new Error('Invalid date!');}

module.exports = {
  getSeason,
};
