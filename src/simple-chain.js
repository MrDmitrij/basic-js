const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrOfSegments: new Array(),

  getLength() {
    return this.arrOfSegments.length;
  },
  addLink(value) {
    this.arrOfSegments.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if (
      Number.isInteger(position)      &&
      typeof position === "number"    &&
      position < this.getLength()     &&
      position > -1
    ) {
      this.arrOfSegments.splice(position, 1);
      return this;
    } else {
      this.arrOfSegments.splice(0, this.getLength());
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.arrOfSegments.reverse();
    return this;
  },
  finishChain() {
    let result = this.arrOfSegments.join("~~");
    this.arrOfSegments.splice(0, this.getLength());
    return result;
  },
};

module.exports = {
  chainMaker
};
