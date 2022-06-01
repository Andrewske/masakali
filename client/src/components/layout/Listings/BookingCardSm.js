import React, { Fragment, useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
//import { isInclusivelyAfterDay } from 'react-dates/src/utils/isInclusivelyAfterDay'
import moment from 'moment';
import GuestsDropdown from './GuestsDropdown';

const BookingCardSm = ({
  price,
  total,
  taxes,
  startDate,
  endDate,
  numDays,
  isBlocked,
  renderDayContents,
  handleDateChange,
  reserveDates,
  guests,
  setGuests,
  clearDates,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [datePickerActive, setDatePickerActive] = useState(false);

  const isBeforeDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

    const aYear = a.year();
    const aMonth = a.month();

    const bYear = b.year();
    const bMonth = b.month();

    const isSameYear = aYear === bYear;
    const isSameMonth = aMonth === bMonth;

    if (isSameYear && isSameMonth) return a.date() < b.date();
    if (isSameYear) return aMonth < bMonth;
    return aYear < bYear;
  }

  const isAfterDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

    const aYear = a.year();
    const aMonth = a.month();

    const bYear = b.year();
    const bMonth = b.month();

    const isSameYear = aYear === bYear;
    const isSameMonth = aMonth === bMonth;

    if (isSameYear && isSameMonth) return a.date() > b.date();
    if (isSameYear) return aMonth > bMonth;
    return aYear > bYear;
  }

  return (
    <div className='booking-card-sm'>
      <span className='bottom-bar'>
        {numDays > 0 ? (
          <p>
            <span style={{ fontSize: '1.5rem' }}>{total} total</span>
          </p>
        ) : (
          <p>
            <span style={{ fontSize: '1.5rem' }}>{price}</span> / night
          </p>
        )}
        {datePickerActive ? (
          startDate &&
          endDate && (
            <span className='btn' onClick={reserveDates}>
              Reserve
            </span>
          )
        ) : (
          <span className='btn' onClick={() => setDatePickerActive(true)}>
            Choose Dates
          </span>
        )}
      </span>

      <span
        className={`date-picker-container ${datePickerActive ? 'active' : ''}`}
      >
        <span className='date-picker-header'>
          <i
            className='icon-close'
            onClick={() => setDatePickerActive(false)}
          />
          <span className='btn' onClick={() => clearDates()}>
            Clear Dates
          </span>
          <div className='form-box'>
            <GuestsDropdown guests={guests} setGuests={setGuests} />
          </div>
        </span>
        {/* <span className='date-picker-info'>
          <h2>{numDays}</h2>
        </span> */}
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
          isOutsideRange={day => isBeforeDay(day, moment()) || isAfterDay(day, moment().add(2, 'y'))}
        />
      </span>
    </div>
  );
};

export default BookingCardSm;
