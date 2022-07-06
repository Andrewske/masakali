import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { DayPickerSingleDateController } from 'react-dates';
import useOnClickOutside from '../../../utils/useOnClickOutside';
//import getDaysBetweenDates from '../../../utils/getDaysBetweenDates';
import { setAlert } from '../../../actions/alert';
import { loadVillas } from '../../../actions/villas';
import { getBlockedDates } from '../../../actions/smoobu';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import Alert from '../Alert';
import moment from 'moment';
import _ from 'lodash';

const Availability = ({
  setAlert,
  loadVillas,
  getBlockedDates,
  surya,
  chandra,
  jala,
}) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState({
    surya: false,
    chandra: false,
    jala: false,
  });

  const ARRIVAL_DATE = 'ARRIVAL DATE';
  const DEPARTURE_DATE = 'DEPARTURE DATE';

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useOnClickOutside(checkInRef, () => setCheckInPickerOpen(false));
  useOnClickOutside(checkOutRef, () => setCheckOutPickerOpen(false));

  const handleCheckIn = (date) => {
    setCheckIn(date);
    //setCheckOut(moment(date).add(1, 'days'));
    setCheckInPickerOpen(false);
  };
  const handleCheckOut = (date) => {
    setCheckOut(date);
    setCheckOutPickerOpen(false);
  };

  const handleClick = async () => {
    if (checkIn > checkOut) {
      setAlert('Departure Date must be later than Arrival Date', 'danger');
      return;
    }
    // List the dates that the user would like to stay
    const getDaysBetweenDates = (startDate, endDate) => {
      let dates = [];
      let now = moment(startDate);
      while (now.isSameOrBefore(moment(endDate).subtract(1, 'days'))) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add(1, 'days');
      }
      return dates;
    };

    let dates = getDaysBetweenDates(checkIn, checkOut);

    // For each villa we need to check if these dates are blockedDates
    let villas = { surya, chandra, jala };
    let availability = isAvailable;

    for (const villa in villas) {
      let blockedDates = Array(
        ...new Set(
          villas[villa].datesReserved.flatMap((d) =>
            getDaysBetweenDates(d.startDate, d.endDate)
          )
        )
      );

      availability =
        dates.filter((d) => !blockedDates.includes(d)).length === dates.length
          ? { ...availability, [villa]: true }
          : { ...availability, [villa]: false };
    }
    setIsAvailable(availability);
  };

  useEffect(() => {
    console.log(isAvailable);
  }, [isAvailable]);

  useEffect(() => {
    getBlockedDates();
  }, []);

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
                focused={focused}
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
                focused
                onFocusChange={({ focused }) => setFocused(focused)}
                isOutsideRange={(day) => day.isBefore(moment(checkIn))}
              />
            </span>
          )}
        </span>

        <span className='button' onClick={handleClick}>
          Check Availability
        </span>
      </span>
      <span className='villas'>
        {Object.entries(isAvailable).map(
          ([key, value]) =>
            value && (
              <span className='villa' key={key}>
                <ImageContext>
                  <IKImage
                    path='/surya-front-night_JpkSeqJUB.jpg'
                    width='200px'
                    lqip={{ active: true }}
                    loading='lazy'
                  />
                </ImageContext>
                <h3>{key}</h3>
                <p>$100/night</p>
              </span>
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
});

export default connect(mapStateToProps, {
  setAlert,
  loadVillas,
  getBlockedDates,
})(Availability);
