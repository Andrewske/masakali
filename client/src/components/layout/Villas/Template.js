import React, { useState, useRef } from 'react';
import Header from '../Header';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import moment from 'moment';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { DayPickerSingleDateController } from 'react-dates';

const ARRIVAL_DATE = 'ARRIVAL DATE';
const DEPARTURE_DATE = 'DEPARTURE DATE';

const Template = () => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);

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

  return (
    <span className='container full'>
      <Header hide={false} />
      <span className='villa-template'>
        <span className='details'>
          <h1>Surya Villa</h1>
          <div className='date-container'>
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
                  <span className='month-year'>
                    {checkIn.format('MMM, YYYY')}
                  </span>
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
                  <span className='month-year'>
                    {checkOut.format('MMM, YYYY')}
                  </span>
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
          </div>
        </span>
        <span className='template-gallery'>
          <ImageContext>
            <IKImage
              className='template-gallery-image'
              path={'/surya-front-night_JpkSeqJUB.jpg'}
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              // loading='lazy'
            />
          </ImageContext>
        </span>
      </span>
    </span>
  );
};

export default Template;
