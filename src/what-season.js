const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = "";
  if (!date) {
    return 'Unable to determine the time of year!';
  };
  
  try {
    date.getDay();
    date.getUTCDate();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  if (!(date instanceof Date) || typeof date.getMonth() != 'number' || typeof date.getTime == 'undefined') {
    throw new Error('Invalid date!');
  }

  switch (date.getMonth()) {
    case 1:
    case 0:
    case 11:
      season = "winter";
      break;

    case 2:
    case 3:
    case 4:
      season = "spring";
      break;

    case 5:
    case 6:
    case 7:
      season = "summer";
      break;

    case 9:
    case 10:
    case 8:
      season = "autumn";
      break;
  }
  return season;
}

module.exports = {
  getSeason
};
