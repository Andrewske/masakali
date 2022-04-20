import React from 'react';

const reactDatesPicker = ({ size }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const isBlocked = (day) => {
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

  const renderDayContents = (day) => {
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

  return size === lg ? (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onDatesChange={(dates) => handleDateChange(dates)}
      focusedInput={focusedInput || (null && START_DATE)}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      initialVisibleMonth={() => moment()}
      showClearDates={true}
      orientation={'vertical'}
      isDayBlocked={(day) => isBlocked(day)}
      renderDayContents={(day) => renderDayContents(day)}
    />
  ) : (
    <DayPickerRangeController
      startDate={startDate}
      endDate={endDate}
      onDatesChange={(dates) => handleDateChange(dates)}
      focusedInput={focusedInput || START_DATE}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      initialVisibleMonth={() => moment()}
      numberOfMonths={2}
      orientation={'verticalScrollable'}
      navPrev={<Fragment />}
      navNext={<span className='load-more'>Load More Months</span>}
      isDayBlocked={(day) => isBlocked(day)}
      renderDayContents={(day) => renderDayContents(day)}
    />
  );
};

export default reactDatesPicker;
