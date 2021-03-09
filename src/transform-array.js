const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let buff = arr.concat();

    if (buff[0] === '--discard-prev' || buff[0] === '--double-prev')
        buff.shift();
    if (buff[buff.length - 1] === '--double-next' || buff[buff.length - 1] === '--discard-next')
        buff.pop();
    for (let i = 0; i < buff.length; i++) {

        if (buff[i] === '--discard-next' && buff[i + 2] === '--double-prev') {
            buff.splice(i, 3);
            i--;
        }
        if (buff[i] === '--discard-next' && buff[i + 2] === '--discard-prev') {
            buff.splice(i, 3);
            i--;
        }
        if (buff[i] === '--double-next') {
            buff.splice(i, 0, buff[i + 1]);
            buff.splice(i + 1, 1);
            //console.log('here' + i);
            i--;
        }
        if (buff[i] === '--double-prev') {
            buff.splice(i, 0, buff[i - 1]);
            buff.splice(i + 1, 1);
            //break;
            i--;
        }
        if (buff[i] === '--discard-prev') {
            buff.splice(i - 1, 2);
            i--;
        }
        if (buff[i] === '--discard-next') {
            buff.splice(i, 2);
            i--;
        }
    }
    return buff;
};


