const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine;
  }
  encrypt(string, key) {
    if (!string || !key)
      throw new Error();

    if (this.isDirectMachine === false)
      string = string.split('').reverse().join('');

    let lettersArray =
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrKey = [];
    let crypted = [];
    let cryptStr = key.toLowerCase().split('');
    let copyString = string.toLowerCase().split('');
    string = string.replace(/\s/g, '').toLowerCase().split('');
    while (arrKey.length <= string.length) {
      for (let item of cryptStr) {
        arrKey.push(item);
      }
    }
    while (arrKey.length != string.length) {
      arrKey.pop();
    }

    for (let i = 0; i < string.length; i++) {
      let idx = lettersArray.indexOf(string[i]);
      let idxKey = lettersArray.indexOf(arrKey[i]);
      if (idx + idxKey >= lettersArray.length && idx !== -1) {
        crypted += lettersArray[(idx + idxKey) % 26];

      }
      else if (idx === -1) {
        crypted += string[i];

      }
      else
        crypted += lettersArray[idx + idxKey];

    }

    crypted = crypted.split('');
    for (let i = 0; i < copyString.length; i++) {
      if (copyString[i] === ' ') {
        let space = copyString.indexOf(copyString[i], i);

        crypted.splice(space, 0, ' ');
      }

    }
    return crypted.join('').toUpperCase();

  }
  decrypt(string, key) {
    // if (!string || !key)
    //   throw new Error();

    if (this.isDirectMachine === false)
      string = string.split('').reverse().join('');

    let lettersArray =
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrKey = [];
    let crypted = [];
    let cryptStr = key.toLowerCase().split('');
    let copyString = string.toLowerCase().split('');
    string = string.replace(/\s/g, '').toLowerCase().split('');
    while (arrKey.length <= string.length) {
      for (let item of cryptStr) {
        arrKey.push(item);
      }
    }
    while (arrKey.length != string.length) {
      arrKey.pop();
    }

    for (let i = 0; i < string.length; i++) {
      let idx = lettersArray.indexOf(string[i]);
      let idxKey = lettersArray.indexOf(arrKey[i]);
      // console.log(idx + ' ' + idxKey);
      if (idx - idxKey < 0 && idx !== -1) {
        crypted += lettersArray[26 + (idx - idxKey) % 26];

      }
      else if (idx === -1) {
        crypted += string[i];

      }
      else
        crypted += lettersArray[idx - idxKey];

    }

    crypted = crypted.split('');
    for (let i = 0; i < copyString.length; i++) {
      if (copyString[i] === ' ') {
        let space = copyString.indexOf(copyString[i], i);

        crypted.splice(space, 0, ' ');
      }

    }
    return crypted.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
