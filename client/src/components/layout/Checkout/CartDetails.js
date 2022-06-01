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
    numDays = 0,
    name,
    guests,
    img = null,
  } = reservation;

  const discount = useCurrencyFormat(reservation.discount);
  const total = useCurrencyFormat(reservation.total);
  const amount = useCurrencyFormat(reservation.amount);
  const taxes = useCurrencyFormat(reservation.taxes);

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
        <p>Taxes: {taxes}</p>
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
