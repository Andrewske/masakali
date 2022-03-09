import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import startCase from 'lodash/startCase';
import useFormatCurrency from '../../../utils/useFormatCurrency';

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
  // const total =
  //   price &&
  //   numDays &&
  //   new Intl.NumberFormat(undefined, {
  //     style: 'currency',
  //     currency,
  //   }).format(price * numDays);

  // useEffect(() => {
  //   if (reservation) {
  //     let amounts = [
  //       reservation.price,
  //       reservation.price * reservation.numDays,
  //     ];
  //     // setAmounts(formatCurrency({ amounts, country }));
  //   }
  // }, [reservation, country]);

  let { amount, total } = useFormatCurrency(price, numDays);

  return (
    <div className='cart-details'>
      {/* <span style={{ backgroundImage: `url(${img})` }} className='image' /> */}
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
        <p>Check In: {moment(startDate).format('MMM DD YYYY')} at 2:00pm</p>
        <p>Check Out: {moment(endDate).format('MMM DD YYYY')} at 11:00am</p>
        <p>Number of guests: {guests}</p>
        <p>Total nights: {numDays}</p>
        <p>Price: {amount}/night</p>
        <p>Total: {total}</p>
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
