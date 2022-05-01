const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(Direct = true) {
    this.Direct = Direct;
  }
  encrypt(message, key) {
    return this.encryptMachine(message, key, 1);
  }
  decrypt(message, key) {
    return this.encryptMachine(message, key, -1);
  }

  encryptMachine(message, key, mode) {
    if (message === undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultString = "";
    let i = 0;
    let shift = 0;
    while (i < message.length) {
      if (/^[A-Z]$/.test(message[i])) {
        let keyCounter = (i - shift) % key.length;
        let newASCIILetter =
          message.charCodeAt(i) + (key.charCodeAt(keyCounter) - 65) * mode;
        if (newASCIILetter < 65 || newASCIILetter > 90) {
          newASCIILetter =
            mode == 1
              ? (newASCIILetter % 91) + 65
              : 90 - (64 - (newASCIILetter % 65));
        }

        resultString += String.fromCharCode(newASCIILetter);
      } else {
        resultString += message[i];
        shift++;
      }
      i++;
    }

    return this.Direct
      ? resultString
      : resultString.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
