const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let currentDepth = 0;
    let maxDepth = 0;

    if (Array.isArray(arr)) {
      maxDepth = currentDepth = 1;
      for (let i = 0; i < arr.length; i++) {
        currentDepth += this.calculateDepth(arr[i]);
        currentDepth > maxDepth ? (maxDepth = currentDepth) : currentDepth;
        currentDepth = 1;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
