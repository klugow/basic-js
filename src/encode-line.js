const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
if (str.length < 2) return str;
let pervi = str[0];
let cont = 1;
let resultat = '';

for (let i = 1; i < str.length; i++) {
let char = str[i];

if (pervi != char) {
if (cont === 1) {
resultat += pervi;
} else {
resultat += cont + pervi;
}
pervi = char;
cont = 1;
} else {
cont++;
}

if (i === str.length -1) {
if (cont === 1) {
resultat += pervi;
} else {
resultat += cont + pervi;
}
}
}

return resultat;
}

module.exports = {
encodeLine
};