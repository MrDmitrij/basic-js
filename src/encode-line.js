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
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    const letter = arr[i];
    while (arr[i] === arr[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) result.push(count);
    result.push(letter);
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
