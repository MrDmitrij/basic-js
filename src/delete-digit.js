const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let number = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr.slice(); 
    arr1.splice(i, 1);
    if (Number(arr1.join('')) > number) {
      number = Number(arr1.join('')) 
    } 
  }
  return number;
}

module.exports = {
  deleteDigit
};
