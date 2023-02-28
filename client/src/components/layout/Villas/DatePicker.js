import { useState, useRef, Fragment } from 'react';
import moment from 'moment';
import { DayPickerSingleDateController } from 'react-dates';
import useBlockedDates from '../../../hooks/useBlockedDates';
import useOnClickOutside from '../../../utils/useOnClickOutside';
const ARRIVAL_DATE = 'ARRIVAL DATE';
const DEPARTURE_DATE = 'DEPARTURE DATE';

const DatePicker = ({
  isCheckIn = false,
  checkIn,
  checkOut,
  villa = 'surya',
  handleDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const blockedDates = useBlockedDates();
  const title = isCheckIn ? ARRIVAL_DATE : DEPARTURE_DATE;

  useOnClickOutside(ref, () => setIsOpen(false));

  const isBlocked = (day) => {
    day = day.format('YYYY-MM-DD');

    if (isCheckIn) {
      return blockedDates[villa].blockedDates.includes(day);
    } else {
      // filter the blocked dates to
      let next = blockedDates[villa].checkInDates.filter(
        (d) => d > moment(checkIn).format('YYYY-MM-DD')
      )[0];

      return day > next || day <= checkIn.format('YYYY-MM-DD');
    }
  };

  const handleClick = (day) => {
    setIsOpen(false);
    handleDateChange({ isCheckIn, day });
  };

  return (
    blockedDates && (
      <Fragment>
        <span
          className="checkin-date"
          ref={ref}
        >
          <div className="title">
            {[title].map((letter, index) => (
              <span key={letter + '-' + index}>{letter}</span>
            ))}
          </div>
          <span
            className="date"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isCheckIn
              ? checkIn.format('MMM DD, YYYY')
              : checkOut.format('MMM DD, YYYY')}
          </span>
        </span>
        {isOpen && (
          <span
            className="day-picker"
            ref={ref}
          >
            <DayPickerSingleDateController
              date={isCheckIn ? checkIn : checkOut}
              onDateChange={(day) => handleClick(day)}
              focused={true}
              onFocusChange={({ focused }) => setFocused(focused)}
              isOutsideRange={(day) => day.isBefore(moment())}
              isDayBlocked={(day) => isBlocked(day)}
            />
          </span>
        )}
      </Fragment>
    )
  );
};

export default DatePicker;
