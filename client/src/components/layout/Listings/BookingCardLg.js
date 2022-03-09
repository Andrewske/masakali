import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import GuestsDropdown from './GuestsDropdown';

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
