import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import CountryPicker from '../CountryPicker';
import TemplateInfo from './TemplateInfo';
import ImageCarousel from './ImageCarousel';
import villaDetails from './villaDetails.json';
import DatePicker from './DatePicker';
import Guests from './Guests';
import Packages from './Packages';

import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import useScrollToTop from '../../../hooks/useScrollToTop';
import useReservation from '../../../hooks/useReservation';

import { pickBy } from 'lodash';

const Template = ({ country, createReservation, packages }) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'days'));
  const [packageCost, setPackageCost] = useState(0);
  const [guests, setGuests] = useState(1);
  const scrollRef = useScrollToTop();
  const navigate = useNavigate();

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const [villa, setVilla] = useState(params.villa || 'surya');

  const {
    amount: villaPrice,
    total,
    discount,
    taxes,
  } = useReservation({
    checkIn,
    checkOut,
    guests,
    villa,
  });

  useEffect(() => {
    let selectedPackages = pickBy(packages, (v, k) => v.isSelected);
    let cost = Object.values(selectedPackages).reduce(
      (x, { price }) => x + price,
      0
    );

    setPackageCost(cost);
  }, [packages]);

  const handleDateChange = ({ isCheckIn, day }) => {
    let arrival = isCheckIn ? day : checkIn;
    let departure = isCheckIn ? day.clone().add(1, 'days') : day;
    setCheckIn(arrival);
    setCheckOut(departure);
  };

  const formattedTotal = useCurrencyFormat(total);

  const reserveDates = () => {
    createReservation({
      startDate: checkIn,
      endDate: checkOut,
      numDays: checkOut.diff(checkIn, 'days'),
      amount: villaPrice,
      discount,
      taxes,
      total,
      name: villa,
      guests,
      img: null,
    });
    navigate('/cart');
  };

  const nextVilla = () => {
    switch (villa) {
      case 'surya':
        setVilla('chandra');
        break;
      case 'chandra':
        setVilla('jala');
        break;
      case 'jala':
        setVilla('akasha');
        break;
      case 'akasha':
        setVilla('surya');
        break;
      default:
        setVilla('surya');
        break;
    }
  };

  return (
    <span
      className="container full"
      ref={scrollRef}
    >
      <Header hide={false} />
      <span className="villa-template">
        <div className="villa-template-details">
          <span className="villa-template-booking">
            <span className="villa-template-header">
              <h1>{villaDetails[villa].title}</h1>
              <i
                className="icon-chevron-right"
                onClick={() => nextVilla()}
              />
            </span>

            <div className="villa-template-date-container">
              <DatePicker
                isCheckIn={true}
                checkIn={checkIn}
                checkOut={checkOut}
                villa={villa ?? null}
                handleDateChange={handleDateChange}
              />
              <DatePicker
                isCheckIn={false}
                checkIn={checkIn}
                checkOut={checkOut}
                villa={villa ?? null}
                handleDateChange={handleDateChange}
              />
              <Guests setGuests={setGuests} />

              <span className="villa-template-total">
                <p>TOTAL</p>
                <span className="villa-template-total-price">
                  <span className="price">
                    {formattedTotal} {country.currency}
                  </span>
                  <CountryPicker />
                </span>
              </span>
            </div>
            <button
              id={`listing_book_${villa}`}
              className="button purple wide"
              onClick={() => reserveDates()}
            >
              {`Book ${villaDetails[villa].name}`}
            </button>
          </span>

          <TemplateInfo villa={villa} />
        </div>
        {/* <ImageCarousel name={villa} /> */}
        <Packages />
      </span>
    </span>
  );
};

const mapStateToProps = (state) => ({
  country: state.country,
  packages: state.packages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (payload) =>
      dispatch({ type: 'CREATE_RESERVATION', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
