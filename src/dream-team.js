const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = '';
  if (!Array.isArray(arr))
    return false;
  arr.forEach(item => {
    if (typeof item !== 'string')
      return false;
    result += item.trim()[0];
  });
  return result.toUpperCase().split('').sort().join('');
};

console.log(module.exports(['   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',])); //'ADGJKMNPRSTW'


