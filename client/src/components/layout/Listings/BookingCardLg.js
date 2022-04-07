import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import GuestsDropdown from './GuestsDropdown';
import moment from 'moment';
import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';

const BookingCardLg = ({
  price,
  total,
  startDate,
  endDate,
  numDays,
  renderDayContents,
  isBlocked,
  handleDateChange,
  reserveDates,
  guests,
  setGuests,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  // const notBlocked = (dates) => {
  //   let { startDate, endDate } = dates;
  //   let range = getDaysBetweenDates({ startDate, endDate });

  //   if (range.some((day) => isBlocked(day))) {
  //     handleDateChange({ startDate: null, endDate: null });
  //     //setFocusedInput('endDate');
  //     return false;
  //   }

  //   return true;
  // };

  return (
    <div className='booking-card'>
      <div className='price'>
        {numDays > 0 ? (
          <p>
            <span style={{ fontSize: '1.5rem' }}>{total} total</span>
          </p>
        ) : (
          <p>
            <span style={{ fontSize: '1.5rem' }}>{price}</span> / night
          </p>
        )}
        <span className='break'></span>
        <p className='subtext'>Save 15% by booking directly with us</p>
      </div>
      <div className='form-box'>
        <DateRangePicker
          startDate={startDate}
          startDateId='startDate'
          endDate={endDate}
          endDateId='endDate'
          onDatesChange={(dates) => handleDateChange(dates)}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          //keepOpenOnDateSelect={() => startDate && !endDate}
          showClearDates={true}
          orientation={'vertical'}
          isDayBlocked={(day) => isBlocked(day)}
          renderDayContents={(day) => renderDayContents(day)}
        />
        <GuestsDropdown guests={guests} setGuests={setGuests} />
      </div>
      {startDate && endDate && (
        <span>
          <span className='btn' onClick={reserveDates}>
            Reserve
          </span>
          <span className='reservation-details'>
            <p>
              {price} X {numDays} {numDays > 1 ? 'nights' : 'night'}
            </p>
            <p>{total}</p>
          </span>
        </span>
      )}
    </div>
  );
};

export default BookingCardLg;
