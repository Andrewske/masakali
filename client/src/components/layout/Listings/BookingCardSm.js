import React, { Fragment, useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';
import GuestsDropdown from './GuestsDropdown';

const BookingCardSm = ({
  price,
  total,
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
        />
      </span>
    </div>
  );
};

export default BookingCardSm;
