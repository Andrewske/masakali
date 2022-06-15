import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { DayPickerSingleDateController } from 'react-dates';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { setAlert } from '../../../actions/alert';
import Alert from '../Alert';
import moment from 'moment';

const Availability = ({ setAlert }) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);

  const ARRIVAL_DATE = 'ARRIVAL DATE';
  const DEPARTURE_DATE = 'DEPARTURE DATE';

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useOnClickOutside(checkInRef, () => setCheckInPickerOpen(false));
  useOnClickOutside(checkOutRef, () => setCheckOutPickerOpen(false));

  const handleCheckIn = (date) => {
    setCheckIn(date);
    setCheckInPickerOpen(false);
  };
  const handleCheckOut = (date) => {
    setCheckOut(date);
    setCheckOutPickerOpen(false);
  };

  const handleClick = () => {
    if (checkIn > checkOut) {
      setAlert('Departure Date must be later than Arrival Date', 'danger');
    }
  };

  return (
    <div className='availability-container'>
      <span className='date-selection'>
        <span className='checkin-date' ref={checkInRef}>
          <div className='title'>
            {[...ARRIVAL_DATE].map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
          <span
            className='date'
            onClick={() => setCheckInPickerOpen(!checkInPickerOpen)}
          >
            <span className='day'>{checkIn.format('DD')}</span>
            <span className='small'>
              <span className='month-year'>{checkIn.format('MMM, YYYY')}</span>
              <span className='weekday'>{checkIn.format('dddd')}</span>
            </span>
          </span>
          {checkInPickerOpen && (
            <span className='day-picker'>
              <DayPickerSingleDateController
                date={checkIn}
                onDateChange={(date) => handleCheckIn(date)}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id='checkIn'
                block={true}
              />
            </span>
          )}
        </span>
        <span className='checkin-date' ref={checkOutRef}>
          <div className='title'>
            {[...DEPARTURE_DATE].map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
          <span
            className='date'
            onClick={() => setCheckOutPickerOpen(!checkOutPickerOpen)}
          >
            <span className='day'>{checkOut.format('DD')}</span>
            <span className='small'>
              <span className='month-year'>{checkOut.format('MMM, YYYY')}</span>
              <span className='weekday'>{checkOut.format('dddd')}</span>
            </span>
          </span>
          {checkOutPickerOpen && (
            <span className='day-picker'>
              <DayPickerSingleDateController
                date={checkOut}
                onDateChange={(date) => handleCheckOut(date)}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id='checkOut'
                block={true}
              />
            </span>
          )}
        </span>

        <span className='button' onClick={handleClick}>
          Check Availability
        </span>
      </span>
      <Alert />
    </div>
  );
};

export default connect(null, { setAlert })(Availability);
