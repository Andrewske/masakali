import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import CountryPicker from '../CountryPicker';
import { calcTaxes } from '../../../utils/getPrices';
import useRetreat from '../../../hooks/useRetreat';

const RetreatCartDetails = ({ reservation, country }) => {
  const {
    retreatData: { startDate, endDate },
  } = useRetreat(reservation.retreatName);

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
      <span className="details-header">
        <h3>{retreatName} Retreat</h3>
        <h3>{villaName} Villa</h3>
      </span>
      <span className="details">
        <span className="detail">
          <p className="detail-title light">Arrival Date</p>
          <p>{moment.utc(startDate).format('MMM DD YYYY')} at 2:00pm</p>
        </span>
        <span className="detail">
          <p className="detail-title light">Departure Date</p>
          <p>{moment.utc(endDate).format('MMM DD YYYY')} at 11:00am</p>
        </span>
        <span className="detail">
          <p className="detail-title light">Price</p>
          <p>{amount}/night</p>
        </span>
        <span className="detail">
          <p className="detail-title light">Taxes</p>
          <p>{taxes}</p>
        </span>
      </span>
      <span className="details-footer">
        <p>Total</p>
        <span className="details-footer-total-price">
          <span className="price">
            {total} {country.currency}
          </span>
          <CountryPicker />
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  country: state.country,
  reservation: state.retreatReservation,
});

export default connect(mapStateToProps, null)(RetreatCartDetails);
