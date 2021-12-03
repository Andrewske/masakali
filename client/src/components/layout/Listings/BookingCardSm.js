import React, { Fragment, useState } from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';
import BookingForm from './BookingForm';

const BookingCardSm = ({
  price,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [datePickerActive, setDatePickerActive] = useState(false);
  const [numDays, setNumDays] = useState('Select check-in date');
  const [savedDates, setSavedDates] = useState(false);

  const handleDateChange = (dateObj) => {
    let { startDate, endDate } = dateObj;
    setStartDate(startDate);
    setEndDate(endDate);

    if (startDate && !endDate) {
      setNumDays('Select check-out date');
    }

    if (startDate && endDate) {
      let days = (endDate - startDate) / (60 * 60 * 24 * 1000);
      setNumDays(`${days} nights`);
    }
  };

  const handleFormChange = (e) => {
    e.preventDefault();

    if (e.target.id === 'name') {
      setName(e.target.value);
    }

    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setSavedDates(false);
  };

  const saveDates = () => {
    setDatePickerActive(false);
    setSavedDates(true);
  };

  return (
    <div className='booking-card-sm'>
      <span className='bottom-bar'>
        <p>
          <span style={{ fontSize: '1.5rem' }}>${price}</span> / night
        </p>
        {datePickerActive ? (
          <span className='btn' onClick={saveDates}>
            Save
          </span>
        ) : (
          <span className='btn' onClick={() => setDatePickerActive(true)}>
            Choose Dates
          </span>
        )}
      </span>

      <span
        className={`date-picker-container ${
          datePickerActive || savedDates ? 'active' : ''
        }`}
      >
        <span className='date-picker-header'>
          <i
            className='icon-times'
            onClick={() => setDatePickerActive(false)}
          />
          <span className='clear-dates' onClick={clearDates}>
            Clear Dates
          </span>
        </span>
        <span className='date-picker-info'>
          <h2>{numDays}</h2>
        </span>
        {savedDates ? (
          <span className='booking-card sm'>
            <BookingForm
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </span>
        ) : (
          <DayPickerRangeController
            startDate={startDate}
            startDateId='startDate'
            endDate={endDate}
            endDateId='endDate'
            onDatesChange={(dates) => handleDateChange(dates)}
            focusedInput={focusedInput || START_DATE}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            //focused={true}
            initialVisibleMonth={() => moment()}
            numberOfMonths={2}
            orientation={'verticalScrollable'}
            navPrev={<Fragment />}
            navNext={<span className='load-more'>Load More Months</span>}
          />
        )}
      </span>
    </div>
  );
};

export default BookingCardSm;
