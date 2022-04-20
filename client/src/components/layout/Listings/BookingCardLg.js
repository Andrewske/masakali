import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import GuestsDropdown from './GuestsDropdown';
import moment from 'moment';

const BookingCardLg = ({
  price,
  total,
  startDate,
  endDate,
  numDays,
  renderDayContents,
  handleDateChange,
  reserveDates,
  guests,
  setGuests,
  isBlocked,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className='booking-card'>
      <div className='price'>
        {numDays > 0 ? (
          <span>
            <p style={{ fontSize: '1.5rem' }}>{total} total</p>
            <p>
              {price} X {numDays} {numDays > 1 ? 'nights' : 'night'}
            </p>
          </span>
        ) : (
          <p>
            <span style={{ fontSize: '1.5rem' }}>{price}</span> / night
          </p>
        )}
        <span className='break'></span>
      </div>
      <div className='form-box'>
        <DateRangePicker
          startDate={startDate}
          startDateId='startDate'
          endDate={endDate}
          endDateId='endDate'
          onDatesChange={(dates) => handleDateChange(dates)}
          focusedInput={focusedInput || (null && START_DATE)}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          initialVisibleMonth={() => moment()}
          showClearDates={true}
          orientation={'vertical'}
          isDayBlocked={(day) => isBlocked(day)}
          renderDayContents={(day) => renderDayContents(day)}
        />
        <GuestsDropdown guests={guests} setGuests={setGuests} />
      </div>
      <p className='subtext'>Save 15% by booking directly with us</p>
      {startDate && endDate && (
        <span>
          <span className='btn' onClick={reserveDates}>
            Reserve
          </span>
          <span className='reservation-details'>
            <p>
              {price} X {numDays} {numDays > 1 ? 'nights' : 'night'}
            </p>
          </span>
        </span>
      )}
    </div>
  );
};

export default BookingCardLg;
