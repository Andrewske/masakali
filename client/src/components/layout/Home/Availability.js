import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { DayPickerSingleDateController } from 'react-dates';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { setAlert } from '../../../actions/alert';
import { loadVillas } from '../../../actions/villas';
import { getBlockedDates, getVillaRates } from '../../../actions/smoobu';
import AvailableVilla from './AvailableVilla';
import Alert from '../Alert';
import moment from 'moment';
import useVillaPricing from '../../../hooks/useVillaPricing';

const Availability = ({ setAlert }) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);

  let villaPricing = useVillaPricing({
    checkIn,
    checkOut,
  });

  const ARRIVAL_DATE = 'ARRIVAL DATE';
  const DEPARTURE_DATE = 'DEPARTURE DATE';

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useOnClickOutside(checkInRef, () => setCheckInPickerOpen(false));
  useOnClickOutside(checkOutRef, () => setCheckOutPickerOpen(false));

  const handleCheckIn = (date) => {
    setCheckIn(date);
    if (moment(checkOut).isBefore(date)) {
      setCheckOut(moment(date).add(1, 'days'));
    }
    setCheckInPickerOpen(false);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setCheckOutPickerOpen(false);
  };

  const handleClick = () => {
    if (checkIn > checkOut) {
      setAlert('Departure Date must be later than Arrival Date', 'danger');
      return;
    }

    if (Object.values(villaPricing).every((x) => x.isAvailable === false)) {
      setAlert('Sorry, no villas are available on these dates', 'danger');
      return;
    }
  };

  return (
    <div className='availability-container'>
      <span className='date-selection'>
        <span className='checkin-date' ref={checkInRef}>
          <div className='title'>
            {[...ARRIVAL_DATE].map((letter, index) => (
              <span key={letter + '-' + index}>{letter}</span>
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
                focused={true}
                onFocusChange={({ focused }) => setFocused(focused)}
              />
            </span>
          )}
        </span>
        <span className='checkin-date' ref={checkOutRef}>
          <div className='title'>
            {[...DEPARTURE_DATE].map((letter, index) => (
              <span key={letter + '-' + index}>{letter}</span>
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
                initialVisibleMonth={() => moment(checkIn)}
                date={checkOut}
                onDateChange={(date) => handleCheckOut(date)}
                focused={true}
                onFocusChange={({ focused }) => setFocused(focused)}
                isOutsideRange={(day) => day.isBefore(moment(checkIn))}
              />
            </span>
          )}
        </span>
        <span className='checkin-button'>
          <span className='button purple' onClick={handleClick}>
            Check Availability
          </span>
        </span>
      </span>
      <span className='villas'>
        {Object.entries(villaPricing).map(
          ([key, value]) =>
            value.isAvailable && (
              <AvailableVilla
                key={key}
                name={key}
                price={value.pricePerNight}
              />
            )
        )}
      </span>
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  surya: state.villas.surya,
  chandra: state.villas.chandra,
  jala: state.villas.jala,
  villas: state.villas,
});

export default connect(mapStateToProps, {
  setAlert,
  loadVillas,
})(Availability);
