const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";

  str = String(str);

  if (options.repeatTimes == undefined) {
    {
      result = result + str + String(options.addition);
    }
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result = result + str;
      addAddition(options);
      i != options.repeatTimes - 1 ? addSeparator(options) : result;
    }
  }

  function addSeparator(options) {
    options.separator == null
      ? (result = result + "+")
      : (result = result + options.separator);
  }

  function addAddition(options) {
    if (
      options.additionRepeatTimes == undefined &&
      options.addition != undefined
    ) {
      result = result + String(options.addition);
    } else {
      for (let n = 0; n < options.additionRepeatTimes; n++) {
        result = result + String(options.addition);
        n != options.additionRepeatTimes - 1
          ? addAdditionSeparator(options)
          : result;
      }
    }
  }
  function addAdditionSeparator(options) {
    options.additionSeparator
      ? (result = result + options.additionSeparator)
      : (result = result + "|");
  }
  return result;
}

module.exports = {
  repeater
};
