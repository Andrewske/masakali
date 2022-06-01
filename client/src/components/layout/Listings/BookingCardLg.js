import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { START_DATE, HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION } from 'react-dates/constants';
import GuestsDropdown from './GuestsDropdown';
import moment from 'moment';

const BookingCardLg = ({
  price,
  total,
  discount,
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
        <p>
          <span style={{ fontSize: '1.5rem' }}>{price}</span> / night
        </p>
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
          orientation={HORIZONTAL_ORIENTATION}
          numberOfMonths={1}
          isDayBlocked={(day) => isBlocked(day)}
          renderDayContents={(day) => renderDayContents(day)}
          maxDate={moment().add(2, 'y')}
        />
        <GuestsDropdown guests={guests} setGuests={setGuests} />
      </div>
      {startDate && endDate && (
        <span className='price'>
          <span className='btn' onClick={reserveDates}>
            Reserve
          </span>

          <span className='row'>
            <p>Price per night</p>
            <p>{price}</p>
          </span>
          <span className='row'>
            <p>Nights</p>
            <p>{numDays}</p>
          </span>
          <span className='row red'>
            <p>Discount (10%)</p>
            <p>{discount}</p>
          </span>
          <span className='row'>
            <p>Total</p>
            <p>{total}</p>
          </span>
        </span>
      )}

      <p className='subtext'>Save 10% by booking directly with us</p>
    </div>
  );
};

export default BookingCardLg;
