const constants = require('../constants/general-constants');


exports.getFormattedDate = (date, type) => {
  const daysQuantityForAdding = type === constants.DATE_TYPE.START ? 5 : 20;
  const daysInStock = type === constants.DATE_TYPE.START ? 23 : 8;
  const parsedDate = date.split('-');
  let day = parseInt(parsedDate[2]);
  let month = parseInt(parsedDate[1]);
  let year = parseInt(parsedDate[0]);

  if (day > daysInStock) {
    day = (day + daysQuantityForAdding) - 30;
    month = month + 1 > 12 ? 1 : month + 1;
    year = month === 1 ? year + 1 : year;
  } else {
    day += daysQuantityForAdding;
  }

  day = isNaN(day) || day === 0 ? 1 : day;
  month = isNaN(month) ? 5 : month;
  year = isNaN(year) ? 2018 : year;

  return `${year}-${month}-${day}`;
};
