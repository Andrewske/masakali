import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

import moment from 'moment';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import { DayPickerSingleDateController } from 'react-dates';
import TemplateInfo from './TemplateInfo';
import ImageCarousel from './ImageCarousel';

import { getBlockedDates } from '../../../actions/smoobu';
import CountryPicker from '../CountryPicker';
import { calcDiscount, calcTaxes, calcTotal } from '../../../utils/getPrices';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { getVillaRates } from '../../../actions/smoobu';
import useScrollToTop from '../../../hooks/useScrollToTop';
import useVillaPrice from '../../../hooks/useVillaPrice';
import useBlockedDates from '../../../hooks/useBlockedDates';



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
  akasha: {
    name: 'akasha',
    title: 'Akasha: 3 bedroom luxury villa',
    description:
      'Join us at Masakali Retreat just north of Ubud surrounded by the most astonishing landscape and rich culture. A true paradise. Our antique luxury villas offer the most blissful get away. Relax by your private infinity pool overlooking the beautiful Bali rice fields, jungle and mountains or find adventure in nearby Ubud. Equipped with kitchens. Spa services and meals available in private suites.',
    ammenities: { bed: 'King' },
  },
};

const Template = ({ villas, country, createReservation }) => {
  const [checkIn, setCheckIn] = useState(moment());
  const [checkOut, setCheckOut] = useState(moment().add(1, 'd'));
  const [focused, setFocused] = useState(true);
  const [checkInPickerOpen, setCheckInPickerOpen] = useState(false);
  const [checkOutPickerOpen, setCheckOutPickerOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [numDays, setNumDays] = useState(1);


  const dates = useBlockedDates()


  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const [villa, setVilla] = useState(params.villa || 'surya');

  const navigate = useNavigate();

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const scrollRef = useScrollToTop();


  const villaPrice = useVillaPrice(checkIn, checkOut, villa)

  useOnClickOutside(checkInRef, () => setCheckInPickerOpen(false));
  useOnClickOutside(checkOutRef, () => setCheckOutPickerOpen(false));

  const setPrices = ({ startDate = checkIn, endDate = checkOut }) => {
    let numDays = endDate.diff(startDate, 'days');

    // ADD A DEFAULT FOR EACH VILLA IF WE CANNOT GET RATES
    //let pricePerNight = villas[villa].rates[moment(startDate).format('YYYY-MM-DD')].price;a
    setTotal(calcTotal({ price: villaPrice, numDays }));
  };

  useEffect(() => {
    setTotal(calcTotal({ price: villaPrice, numDays}));
    console.log('Setting Total')

  }, [villaPrice, numDays]);

  const handleCheckIn = (date) => {
    setCheckIn(date);
    setCheckOut(date.clone().add(1, 'days'));
    setPrices({ startDate: date, endDate: moment(date).add(1, 'days') });
    setNumDays(1)

    setCheckInPickerOpen(false);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
    setPrices({ endDate: date });
    setNumDays(date.diff(checkIn, 'days'));
    setCheckOutPickerOpen(false);
  };

  const addGuest = (type) => {
    if (type === 'adult') {
      setAdults(adults >= 4 ? 4 : adults + 1);
    }

    if (type === 'child') {
      setChildren(children >= 4 ? 4 : children + 1);
    }
  };

  const removeGuest = (type) => {
    if (type === 'adult') {
      setAdults(adults > 1 ? adults - 1 : 1);
    }

    if (type === 'child') {
      setChildren(children > 0 ? children - 1 : 0);
    }
  };

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
      guests: adults + children,
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
    <span className='container full' ref={scrollRef}>
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
                    focused={true}
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
                    focused={true}
                    onDateChange={(date) => handleCheckOut(date)}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    isOutsideRange={(day) => day.isBefore(moment(checkIn))}
                    isDayBlocked={(day) => isBlocked({ day })}
                  />
                </span>
              )}
              <span className='checkin-date'>
                <div className='title'>
                  {[...'number of guests'].map((letter, index) => (
                    <span key={letter + '-' + index}>{letter}</span>
                  ))}
                </div>
                <span className='date'>
                  {adults} adult(s){' '}
                  <span className='icons'>
                    <i
                      className='icon-chevron-up'
                      onClick={() => addGuest('adult')}
                    />
                    <i
                      className='icon-chevron-down'
                      onClick={() => removeGuest('adult')}
                    />
                  </span>{' '}
                  {children} children
                  <span className='icons'>
                    <i
                      className='icon-chevron-up'
                      onClick={() => addGuest('child')}
                    />
                    <i
                      className='icon-chevron-down'
                      onClick={() => removeGuest('child')}
                    />
                  </span>
                </span>
              </span>

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
              id={`listing_book_${villa}`}
              className='button purple wide'
              onClick={() => reserveDates()}
            >
              {`Book ${villaDetails[villa].name}`}
            </button>
          </span>

          <TemplateInfo villa={villa} />
        </div>
        <ImageCarousel name={villa} />
      </span>
    </span>
  );
};

const mapStateToProps = (state) => ({
  villas: state.villas,
  country: state.country,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getVillaRates: () => dispatch(getVillaRates()),
    getBlockedDates: () => getBlockedDates(),
    createReservation: (payload) =>
      dispatch({ type: 'CREATE_RESERVATION', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
