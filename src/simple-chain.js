const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.join('').length;
  },
  addLink(value) {
    if (isFinite(value) || value !== 'string') {
      this.result.push(`( ${value} )~~`);
    }
    else
      this.result.push(`( )~~`);
    return this;
  },
  removeLink(position) {
    //if (this.result.includes(`( ${position} )~~`))
    if (typeof position !== 'number') {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let fnl = this.result.join('').slice(0, this.result.join('').length - 2);
    this.result = [];
    return fnl;
  }
};

module.exports = chainMaker;

//console.log(module.exports.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
