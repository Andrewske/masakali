import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import startCase from 'lodash/startCase';
import useCurrencyFormat from '../../../utils/useCurrencyFormat';
import { percDiscount } from '../../../config';

const CartDetails = ({
  reservation,
  removeReservation,
  success = false,
  country,
}) => {
  const {
    startDate = null,
    endDate = null,
    price = 0,
    numDays = 0,
    name,
    guests,
    img = null,
  } = reservation;

  const discount = useCurrencyFormat(price * percDiscount * numDays);
  const total = useCurrencyFormat(price * (1 - percDiscount) * numDays);
  const amount = useCurrencyFormat(price);

  return (
    <div className='cart-details'>
      {!success && (
        <span
          className='icon-close remove-reservation'
          onClick={() => removeReservation(reservation)}
        />
      )}
      {img?.path && (
        <ImageContext>
          <IKImage
            className='large-img'
            path={img.path}
            transformation={[{ height: '500px', dpr: 'auto' }]}
            loading='lazy'
          />
        </ImageContext>
      )}
      <span className='details'>
        <h3>Stay in {startCase(name)} Room</h3>
        <p>Check In: {moment.utc(startDate).format('MMM DD YYYY')} at 2:00pm</p>
        <p>Check Out: {moment.utc(endDate).format('MMM DD YYYY')} at 11:00am</p>
        <p>Number of guests: {guests}</p>
        <p>Total nights: {numDays}</p>
        <p>Price: {amount}/night</p>
        <p>Discount: {discount}</p>
        <p className='total'>Total: {total}</p>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeReservation: (payload) =>
      dispatch({ type: 'REMOVE_RESERVATION', payload }),
  };
};

const mapStateToProps = (state) => ({
  country: state.country,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
