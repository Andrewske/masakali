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

const ARRIVAL_DATE = 'ARRIVAL DATE';
const DEPARTURE_DATE = 'DEPARTURE DATE';

const villaDetails = {
  surya: {
    name: 'Surya',
    description:
      'Surya Villa is equipped with a king-size luxury mattress and a sofa. Look forward to a serene outdoor view as you plunge into your private infinity pool and listen to the gentle breeze of Bali.',
    ammenities: { bed: 'King' },
  },
};

const Template = ({ reviews, getReviews }) => {
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
    setCheckOut(moment(date).add(1, 'days'));
    setCheckInPickerOpen(false);
  };
  const handleCheckOut = (date) => {
    setCheckOut(date);
    setCheckOutPickerOpen(false);
  };

  useEffect(() => {
    if (!reviews) {
      getReviews();
    }
  }, []);

  return (
    <span className='container full'>
      <Header hide={false} />
      <span className='villa-template'>
        <div className='villa-template-details'>
          <span className='villa-template-booking'>
            <h1>Surya Villa</h1>
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
                  />
                </span>
              )}
            </div>
            <button className='button purple wide'>Book Surya</button>
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
  reviews: state.villas.reviews,
});

export default connect(mapStateToProps, { getReviews })(Template);
