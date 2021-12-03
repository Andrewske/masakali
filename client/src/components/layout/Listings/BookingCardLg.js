import React from 'react';
import BookingForm from './BookingForm';

const BookingCardLg = ({
  price,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div className='booking-card'>
      <div className='price'>
        <p>
          <span style={{ fontSize: '1.5rem' }}>${price}</span> / night
        </p>
        <span className='break'></span>
        <p className='subtext'>Save 15% by booking directly with us</p>
      </div>
      <BookingForm
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};

export default BookingCardLg;
