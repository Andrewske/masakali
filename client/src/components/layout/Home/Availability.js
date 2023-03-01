import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { DayPickerSingleDateController } from 'react-dates';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { setAlert } from '../../../actions/alert';
import { loadVillas } from '../../../actions/villas';
import AvailableVilla from './AvailableVilla';
import Alert from '../Alert';
import moment from 'moment';
import useBlockedDates from '../../../hooks/useBlockedDates';
const villas = ['surya', 'chandra', 'jala', 'akasha'];

const getDaysBetweenDates = (startDate, endDate) => {
  let dates = [];
  let now = moment(startDate);
  while (now.isSameOrBefore(moment(endDate).subtract(1, 'days'))) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
};

const Availability = ({ setAlert }) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);
  const blockedDates = useBlockedDates();

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

  const isAvailable = (checkIn, checkOut, villa = null) => {
    let dates = getDaysBetweenDates(checkIn, checkOut);

    return dates.every((date) => {
      if (!villa) {
        return villas.some((v) => {
          return blockedDates[v]?.blockedDates.includes(
            moment(date).format('YYYY-MM-DD')
          );
        });
      }

      return blockedDates[villa]?.blockedDates.includes(
        moment(date).format('YYYY-MM-DD')
      );
    });
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

    if (villas.every((x) => isAvailable(x, checkIn, checkOut) === false)) {
      setAlert('Sorry, no villas are available on these dates', 'danger');
      return;
    }
  };

  return (
    <div
      id="availability"
      className="availability-container"
    >
      <span className="date-selection">
        <span
          className="checkin-date"
          ref={checkInRef}
        >
          <div className="title">
            {[...ARRIVAL_DATE].map((letter, index) => (
              <span key={letter + '-' + index}>{letter}</span>
            ))}
          </div>
          <span
            className="date"
            onClick={() => setCheckInPickerOpen(!checkInPickerOpen)}
          >
            <span className="day">{checkIn.format('DD')}</span>
            <span className="small">
              <span className="month-year">{checkIn.format('MMM, YYYY')}</span>
              <span className="weekday">{checkIn.format('dddd')}</span>
            </span>
          </span>
          {checkInPickerOpen && (
            <span className="day-picker">
              <DayPickerSingleDateController
                date={checkIn}
                onDateChange={(date) => handleCheckIn(date)}
                focused={true}
                onFocusChange={({ focused }) => setFocused(focused)}
                isDayHighlighted={(day) =>
                  isAvailable(day, moment(day).add(1, 'days'))
                }
              />
            </span>
          )}
        </span>
        <span
          className="checkin-date"
          ref={checkOutRef}
        >
          <div className="title">
            {[...DEPARTURE_DATE].map((letter, index) => (
              <span key={letter + '-' + index}>{letter}</span>
            ))}
          </div>
          <span
            className="date"
            onClick={() => setCheckOutPickerOpen(!checkOutPickerOpen)}
          >
            <span className="day">{checkOut.format('DD')}</span>
            <span className="small">
              <span className="month-year">{checkOut.format('MMM, YYYY')}</span>
              <span className="weekday">{checkOut.format('dddd')}</span>
            </span>
          </span>
          {checkOutPickerOpen && (
            <span className="day-picker">
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
        <span className="checkin-button">
          <span
            id="home_check_availability"
            className="button purple"
            onClick={handleClick}
          >
            Check Availability
          </span>
        </span>
      </span>
      <span className="villas">
        {villas.map(
          (villa) =>
            isAvailable(checkIn, checkOut, villa) && (
              <AvailableVilla
                key={villa}
                name={villa}
                checkIn={checkIn}
                checkOut={checkOut}
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
