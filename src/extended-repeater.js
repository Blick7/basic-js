const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  str = String(str);

  if (options.hasOwnProperty('addition'))
    str += options.addition;

  if (options.hasOwnProperty('additionRepeatTimes'))
    for (let i = 1; i < options.additionRepeatTimes; i++)
      str += (options.additionSeparator || '|') + options.addition;

  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 1; i < options.repeatTimes; i++)
      result += str + (options.separator || '+');
    result += str;
  }
  else
    result = str;
  return result;
};
// Local check
console.log(module.exports('hello', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' }));

