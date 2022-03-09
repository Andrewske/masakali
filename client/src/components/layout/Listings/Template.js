import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Gallery from './Gallery';
import FullScreenGallery from './FullScreenGallery';
import BookingCardLg from './BookingCardLg';
import BookingCardSm from './BookingCardSm';
import useBreakpoint from '../../../utils/useBreakpoint';
import useFormatCurrency from '../../../utils/useFormatCurrency';
import moment from 'moment';

const Template = ({ listing, createReservation }) => {
  let {
    name,
    title,
    description,
    price,
    images,
    imageSelection,
    blockedDates,
    checkInDates,
  } = listing;
  const [fullScreenGalleryOpen, setFullScreenGalleryOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numDays, setNumDays] = useState(0);
  const [guests, setGuests] = useState(1);
  const point = useBreakpoint();
  const history = useHistory();

  const imagePaths = images.filter((i) =>
    imageSelection.map((a) => a.key === i)
  );

  const { amount, total } = useFormatCurrency(price, numDays);

  const isBlocked = (day) =>
    blockedDates && blockedDates.has(moment(day).format('YYYY-MM-DD'));

  const renderDayContents = (day) => {
    if (checkInDates && checkInDates.has(moment(day).format('YYYY-MM-DD'))) {
      return <span className='checkoutDate'>{day.format('D')}</span>;
    } else {
      return <div>{day.format('D')}</div>;
    }
  };

  const handleDateChange = (dateObj) => {
    let { startDate, endDate } = dateObj;
    setStartDate(startDate);
    setEndDate(endDate);

    if (startDate && !endDate) {
      setNumDays('Select check-out date');
    }

    if (startDate && endDate) {
      let days = (endDate - startDate) / (60 * 60 * 24 * 1000);
      setNumDays(days);
    }
  };

  const reserveDates = () => {
    createReservation({
      startDate: moment(startDate).format('YYYY-MM-DD'),
      endDate: moment(endDate).format('YYYY-MM-DD'),
      numDays,
      price,
      name,
      guests,
      img: imagePaths[0],
    });
    history.push('/cart');
  };

  return (
    <div
      className={`container listing-page ${
        fullScreenGalleryOpen ? 'hidden' : ''
      }`}
    >
      <FullScreenGallery
        images={images}
        fullScreenGalleryOpen={fullScreenGalleryOpen}
        setFullScreenGalleryOpen={setFullScreenGalleryOpen}
      />
      <span className='listing-header'>
        <div className='images'>
          <Gallery
            images={imagePaths}
            setFullScreenGalleryOpen={setFullScreenGalleryOpen}
          />
        </div>
      </span>
      <span className='listing-body'>
        <span className='listing-details'>
          <h1>{title}</h1>
          <p>Tegallalang, Bali, Indonesia</p>
          <div className='line'></div>
          <p>{description}</p>
        </span>
        {point === 'md' || point === 'lg' ? (
          <BookingCardLg
            price={amount}
            total={total}
            startDate={startDate}
            endDate={endDate}
            numDays={numDays}
            isBlocked={isBlocked}
            renderDayContents={renderDayContents}
            handleDateChange={handleDateChange}
            reserveDates={reserveDates}
            guests={guests}
            setGuests={setGuests}
          />
        ) : (
          <BookingCardSm
            price={amount}
            total={total}
            startDate={startDate}
            endDate={endDate}
            numDays={numDays}
            isBlocked={isBlocked}
            reserveDates={reserveDates}
            renderDayContents={renderDayContents}
            handleDateChange={handleDateChange}
            guests={guests}
            setGuests={setGuests}
          />
        )}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (payload) =>
      dispatch({ type: 'CREATE_RESERVATION', payload }),
  };
};

export default connect(null, mapDispatchToProps)(Template);
