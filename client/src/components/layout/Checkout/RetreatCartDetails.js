import { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import CountryPicker from '../CountryPicker';
import { calcTaxes } from '../../../utils/getPrices';
import useRetreat from '../../../hooks/useRetreat';

const RetreatCartDetails = ({ reservation, country, user, retreat }) => {
  const {
    retreatData: { startDate, endDate },
  } = retreat;

  const { villaName, retreatName, totalUSD } = reservation;

  let tax = calcTaxes({ villaPrice: totalUSD, hasDiscount: false });
  let total = useCurrencyFormat(totalUSD + tax);
  let taxes = useCurrencyFormat(tax);
  let amount = useCurrencyFormat(totalUSD);

  return (
    <div className="cart-details">
      {/* {!success && (
        <span
          className='icon-close remove-reservation'
          onClick={() => removeReservation(reservation)}
        />
      )} */}
      <div className="details-header">
        <h3>{retreatName} Retreat</h3>
        <h3>{villaName} Villa</h3>
      </div>
      <div className="details">
        <div className="detail">
          <p className="detail-title light">Arrival Date</p>
          <p>{moment.utc(startDate).format('MMM DD YYYY')} at 2:00pm</p>
        </div>
        <div className="detail">
          <p className="detail-title light">Departure Date</p>
          <p>{moment.utc(endDate).format('MMM DD YYYY')} at 11:00am</p>
        </div>
        <div className="detail">
          <p className="detail-title light">Price</p>
          <p>{amount}</p>
        </div>
        <div className="detail">
          <p className="detail-title light">Taxes</p>
          <p>{taxes}</p>
        </div>
      </div>
      <div className="details-footer">
        <p>Total</p>
        <div className="details-footer-total-price">
          <div className="price">
            {total} {country.currency}
          </div>
          <CountryPicker />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  country: state.country,
  reservation: state.retreatReservation,
});

export default connect(mapStateToProps, null)(RetreatCartDetails);
