const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        let currDepth = this.calculateDepth(item);
        currDepth++;
        if (currDepth > count)
          count = currDepth;
      }

    });
    return count;
  }
};
