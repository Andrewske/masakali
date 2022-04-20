import moment from 'moment';

export const isBlocked = ({ day, startDate, blockedDates }) => {
  if (startDate) {
    let afterDates = [...blockedDates].filter((date) =>
      moment(date).isAfter(startDate)
    );
    if (afterDates.length > 0) {
      return (
        moment(day).isBefore(moment(startDate).subtract(1, 'days')) ||
        moment(day).format('YYYY-MM-DD') >=
          afterDates.sort((a, b) => new Date(a) - new Date(b))[0]
      );
    }
  }
  return blockedDates && blockedDates.has(moment(day).format('YYYY-MM-DD'));
};

const renderDayContents = ({ day, checkInDates }) => {
  if (checkInDates && checkInDates.has(moment(day).format('YYYY-MM-DD'))) {
    return <span className='checkoutDate'>{day.format('D')}</span>;
  } else {
    return <div>{day.format('D')}</div>;
  }
};

const handleDateChange = (dateObj) => {
  let { startDate, endDate } = dateObj;
  setStartDate(startDate);
  setEndDate(endDate);

  if (startDate && !endDate) {
    setNumDays('Select check-out date');
  }

  if (startDate && endDate) {
    let days = (endDate - startDate) / (60 * 60 * 24 * 1000);
    setNumDays(days);
  }
};
