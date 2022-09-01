import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import CountryPicker from '../CountryPicker';

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
      {/* {!success && (
        <span
          className='icon-close remove-reservation'
          onClick={() => removeReservation(reservation)}
        />
      )} */}
      <span className='details-header'>
        <h3>{name} Villa</h3>
      </span>
      <span className='details'>
        <span className='detail'>
          <p className='detail-title light'>Arrival Date</p>
          <p>{moment.utc(startDate).format('MMM DD YYYY')} at 2:00pm</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Departure Date</p>
          <p>{moment.utc(endDate).format('MMM DD YYYY')} at 11:00am</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Number of Guests</p>
          <p>{guests || 0}</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Number of Nights</p>
          <p>{numDays}</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Price</p>
          <p>{amount}/night</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Discount</p>
          <p>{discount}</p>
        </span>
        <span className='detail'>
          <p className='detail-title light'>Taxes</p>
          <p>{taxes}</p>
        </span>
      </span>
      <span className='details-footer'>
        <p>Total</p>
        <span className='details-footer-total-price'>
          <span className='price'>
            {total} {country.currency}
          </span>
          <CountryPicker />
        </span>
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
