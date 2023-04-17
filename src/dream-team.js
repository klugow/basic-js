const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
let res = false;

if (Array.isArray(members) && members.length > 0) {
let heiseNam = [];

for (let member of members) {
if (typeof member === 'string') {
let nam = member.trim();

if (nam.length > 0) {
heiseNam.push(nam[0].toUpperCase());
}
}
}

if (heiseNam.length > 0) {
res = heiseNam.sort().join('');
}
}

return res;
}

module.exports = {
  createDreamTeam
};