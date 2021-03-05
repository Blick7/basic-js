const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(element => {
    element.map(item => (item === '^^' ? count++ : 1))
  });
  return count;
};


console.log(module.exports([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]))