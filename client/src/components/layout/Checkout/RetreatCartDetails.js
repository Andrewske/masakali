import { connect } from 'react-redux';
import moment from 'moment';
import CountryPicker from '../CountryPicker';

import AddOn from './AddOn';

const RetreatCartDetails = ({ reservation, country, retreat }) => {
  let {
    retreatData: {
      startDate,
      endDate,
      formattedTotal,
      formattedPrice,
      formattedTaxes,
      formattedAddOns,
    },
    updateBooking,
  } = retreat;

  const { villaName, retreatName, addOns } = reservation;

  return (
    <div className="cart-details">
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
          <p>{formattedPrice}</p>
        </div>
        <div className="detail">
          <p className="detail-title light">Add Ons Total</p>
          <p>{formattedAddOns}</p>
        </div>
        <div className="detail">
          <p className="detail-title light">Taxes</p>
          <p>{formattedTaxes}</p>
        </div>
      </div>
      <div className="details-footer">
        <p>Total</p>
        <div className="details-footer-total-price">
          <div className="price">
            {formattedTotal} {country.currency}
          </div>
          <CountryPicker />
        </div>
      </div>
      <div className="add-ons">
        <h3>Add Ons</h3>
        {addOns?.map((x) => (
          <AddOn
            id={x.id}
            addOns={addOns}
            updateBooking={updateBooking}
          />
        ))}
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
