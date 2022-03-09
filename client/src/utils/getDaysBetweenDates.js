import React from 'react';
import moment from 'moment';

const getDaysBetweenDates = ({ startDate, endDate }) => {
  let now = moment(startDate).add(1, 'day'),
    dates = [];

  while (now.isSameOrBefore(moment(endDate).subtract(1, 'day'))) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }

  return dates;
};

export default getDaysBetweenDates;
