import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Gallery from './Gallery';
import FullScreenGallery from './FullScreenGallery';
import BookingCardLg from './BookingCardLg';
import BookingCardSm from './BookingCardSm';
import useBreakpoint from '../../../utils/useBreakpoint';
import useFormatCurrency from '../../../utils/useFormatCurrency';
import useCurrencyFormat from '../../../utils/useCurrencyFormat';
import moment from 'moment';

import { getBlockedDates } from '../../../actions/smoobu';

const percDiscount = 0.1;

const Template = ({ listing, createReservation, handleSmoobu, villas }) => {
  let {
    name,
    title,
    description,
    price,
    images,
    imageSelection,
    blockedDates,
    checkInDates,
    setReducedPrice
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

  //const { total, discount } = useFormatCurrency(price, numDays);
  const discount = useCurrencyFormat(price * percDiscount * numDays);
  const total = useCurrencyFormat(price * (1 - percDiscount) * numDays);
  const amount = useCurrencyFormat(price);

  useEffect(() => {
    handleSmoobu();
  }, []);

  const isBlocked = (day) => {
    if (startDate) {
      let afterDates = [...blockedDates].filter((date) =>
        moment(date).isAfter(startDate)
      );
      if (afterDates.length > 0) {
        return (
          moment(day).isBefore(moment(startDate).subtract(1, 'days')) ||
          moment(day).format('YYYY-MM-DD') >=
          afterDates.sort((a, b) => new Date(a) - new Date(b))[0]
        );
      }
    }
    return blockedDates && blockedDates.has(moment(day).format('YYYY-MM-DD'));
  };

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
      let price =
        villas[name].rates[moment(startDate).utc().format('YYYY-MM-D')]?.price || null;
      if (price) {
        setReducedPrice(villas[name].rates[moment(startDate).utc().format('YYYY-MM-D')]?.price);
      }
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

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div
      className={`container listing-page ${fullScreenGalleryOpen ? 'hidden' : ''
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
          <p>{amount}</p>
        </span>
        {point === 'md' || point === 'lg' ? (
          <BookingCardLg
            price={amount}
            total={total}
            discount={discount}
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
            discount={discount}
            startDate={startDate}
            endDate={endDate}
            numDays={numDays}
            isBlocked={isBlocked}
            reserveDates={reserveDates}
            renderDayContents={renderDayContents}
            handleDateChange={handleDateChange}
            guests={guests}
            setGuests={setGuests}
            clearDates={clearDates}
          />
        )}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  villas: state.villas
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleSmoobu: () => dispatch(getBlockedDates()),
    createReservation: (payload) =>
      dispatch({ type: 'CREATE_RESERVATION', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
