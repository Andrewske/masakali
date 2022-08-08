import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import moment from 'moment';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { DayPickerSingleDateController } from 'react-dates';
import TemplateInfo from './TemplateInfo';
import ImageCarousel from './ImageCarousel';
import { getReviews } from '../../../actions/google';
import { getBlockedDates } from '../../../actions/smoobu';
import CountryPicker from '../CountryPicker';
import { calcDiscount, calcTaxes, calcTotal } from '../../../utils/getPrices';
import useCurrencyFormat from '../../../utils/useCurrencyFormat';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../../../actions/user';

const ARRIVAL_DATE = 'ARRIVAL DATE';
const DEPARTURE_DATE = 'DEPARTURE DATE';

const villaDetails = {
  surya: {
    name: 'surya',
    title: 'Surya Villa',
    description:
      'Surya Villa is equipped with a king-size luxury mattress and a sofa. Look forward to a serene outdoor view as you plunge into your private infinity pool and listen to the gentle breeze of Bali.',
    ammenities: { bed: 'King' },
  },
  chandra: {
    name: 'chandra',
    title: 'Chandra Villa',
    description:
      'Surya Villa is equipped with a king-size luxury mattress and a sofa. Look forward to a serene outdoor view as you plunge into your private infinity pool and listen to the gentle breeze of Bali.',
    ammenities: { bed: 'King' },
  },
  jala: {
    name: 'jala',
    title: 'Jala Villa',
    description:
      'Surya Villa is equipped with a king-size luxury mattress and a sofa. Look forward to a serene outdoor view as you plunge into your private infinity pool and listen to the gentle breeze of Bali.',
    ammenities: { bed: 'King' },
  },
};

const Template = ({
  reviews,
  getReviews,
  getBlockedDates,
  villas,
  country,
  createReservation,
}) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(null);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);
  const [price, setPrice] = useState(100);
  const [numDays, setNumDays] = useState(checkOut.diff(checkIn, 'days'));
  const [total, setTotal] = useState(100);

  const [villa, setVilla] = useState('surya');

  const navigate = useNavigate();

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useOnClickOutside(checkInRef, () => setCheckInPickerOpen(false));
  useOnClickOutside(checkOutRef, () => setCheckOutPickerOpen(false));

  const handleCheckIn = (date) => {
    setCheckIn(date);
    setCheckOut(moment(date).add(1, 'days'));
    setCheckInPickerOpen(false);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setCheckOutPickerOpen(false);
  };

  useEffect(() => {
    if (!reviews) getReviews();
  }, [reviews, getReviews]);

  useEffect(() => {
    if (_.size(villas[villa]) === 0) getBlockedDates();
  }, [villas, villa, getBlockedDates]);

  const isBlocked = ({ day, isCheckIn = false }) => {
    day = moment(day).format('YYYY-MM-DD');

    if (isCheckIn) {
      return [
        ...villas[villa].checkInDates,
        ...villas[villa].blockedDates,
      ].includes(day);
    } else {
      let next = villas[villa].checkInDates.filter(
        (d) => d > moment(checkIn).format('YYYY-MM-DD')
      )[0];

      return day <= moment(checkIn).format('YYYY-MM-DD') || day > next;
    }
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      let numDays = checkOut.diff(checkIn, 'days');

      // ADD A DEFAULT FOR EACH VILLA IF WE CANNOT GET RATES
      let pricePerNight =
        villas[villa].rates[moment(checkIn).format('YYYY-MM-DD')].price;
      //const {price, total} = calcPrice(numDays, )
      setPrice(pricePerNight);
      setNumDays(numDays);
      setTotal(calcTotal({ price: pricePerNight, numDays }));
    }
  }, [checkIn, checkOut]);

  const formattedTotal = useCurrencyFormat(total);

  const reserveDates = () => {
    let price = villas[villa].rates[moment(checkIn).format('YYYY-MM-DD')].price;
    let numDays = checkOut.diff(checkIn, 'days');

    createReservation({
      startDate: checkIn,
      endDate: checkOut,
      numDays: checkOut.diff(checkIn, 'days'),
      amount: price,
      discount: calcDiscount({ price, numDays }),
      taxes: calcTaxes({ price, numDays }),
      total: calcTotal({ price, numDays }),
      name: villa,
      //guests,
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
        setVilla('surya');
        break;
      default:
        setVilla('surya');
        break;
    }
  };

  return (
    <span className='container full'>
      <Header hide={false} />
      <span className='villa-template'>
        <div className='villa-template-details'>
          <span className='villa-template-booking'>
            <span className='villa-template-header'>
              <h1>{villaDetails[villa].title}</h1>
              <i className='icon-chevron-right' onClick={() => nextVilla()} />
            </span>

            <div className='villa-template-date-container'>
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
                  {checkIn.format('MMM DD, YYYY')}
                </span>
              </span>
              {checkInPickerOpen && (
                <span className='day-picker' ref={checkInRef}>
                  <DayPickerSingleDateController
                    date={checkIn}
                    onDateChange={(date) => handleCheckIn(date)}
                    focused={focused}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    isOutsideRange={(day) => day.isBefore(moment())}
                    isDayBlocked={(day) => isBlocked({ day, isCheckIn: true })}
                  />
                </span>
              )}
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
                  {checkOut.format('MMM DD, YYYY')}
                </span>
              </span>
              {checkOutPickerOpen && (
                <span className='day-picker' ref={checkOutRef}>
                  <DayPickerSingleDateController
                    initialVisibleMonth={() => moment(checkIn)}
                    date={checkOut}
                    onDateChange={(date) => handleCheckOut(date)}
                    focused
                    onFocusChange={({ focused }) => setFocused(focused)}
                    isOutsideRange={(day) => day.isBefore(moment(checkIn))}
                    isDayBlocked={(day) => isBlocked({ day })}
                  />
                </span>
              )}
              <span className='villa-template-total'>
                <p>TOTAL</p>
                <span className='villa-template-total-price'>
                  <span className='price'>
                    {formattedTotal} {country.currency}
                  </span>
                  <CountryPicker />
                </span>
              </span>
            </div>
            <button
              className='button purple wide'
              onClick={() => reserveDates()}
            >
              {`Book ${villaDetails[villa].name}`}
            </button>
          </span>

          <TemplateInfo />
        </div>
        {/* <span className='template-gallery'>
          <ImageContext>
            <IKImage
              className='template-gallery-image'
              path={'/surya-front-night_JpkSeqJUB.jpg'}
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              // loading='lazy'
            />
          </ImageContext>
        </span> */}
        <ImageCarousel />
      </span>
    </span>
  );
};

const mapStateToProps = (state) => ({
  villas: state.villas,
  reviews: state.villas.reviews,
  country: state.country,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //handleSmoobu: () => dispatch(getBlockedDates()),
    getReviews: () => getReviews(),
    getBlockedDates: () => getBlockedDates(),
    createReservation: (payload) =>
      dispatch({ type: 'CREATE_RESERVATION', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
