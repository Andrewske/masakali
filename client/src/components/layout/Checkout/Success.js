import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useFormatCurrency from '../../../utils/useFormatCurrency';

const Success = ({ reservations, country }) => {
  const [reservation, setReservation] = useState(null);
  const [amounts, setAmounts] = useState([0, 0]);

  let { amount, total } = useFormatCurrency(amounts[0], amounts[1]);

  useEffect(() => {
    let res =
      reservations.length > 0
        ? reservations.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))[0]
        : null;

    res.numDays =
      (moment(res.endDate) - moment(res.startDate)) / (60 * 60 * 24 * 1000);
    setReservation(res);
    setAmounts([res.amount / res.numDays, res.numDays]);
  }, [reservations]);

  return (
    <div className='success-container'>
      <header>
        <h1>Success!</h1>
      </header>
      <div className='row'>
        <ImageContext>
          <IKImage
            className='success-img'
            path={'/Gallery/Completed/10_iBl0-OG3It.jpg'}
            transformation={[{ height: '500px', dpr: 'auto' }]}
            loading='lazy'
          />
        </ImageContext>
        <h2>Thank you for booking at Masakali Retreat</h2>
        {reservation && (
          <span className='details'>
            <div className='dates'>
              <div className='date'>
                <p className='title'>Check in</p>
                <p>
                  {moment(reservation.startDate).utc().format('MMM DD YYYY')}
                </p>
                <p>2:00 PM</p>
              </div>
              <div className='date'>
                <p className='title'>Check out</p>
                <p>{moment(reservation.endDate).utc().format('MMM DD YYYY')}</p>
                <p>11:00 AM</p>
              </div>
            </div>
            <p>Number of guests: {reservation.guests}</p>
            <p>Total nights: {reservation.numDays}</p>
            <p>Price: {amount}/night</p>
            <p>Total: {total}</p>
          </span>
        )}
        <p className='small'>
          Questions? Email us at{' '}
          <a href='mailto:info@masakaliretreat.com'>info@masakaliretreat.com</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reservations: state.user.reservations.past,
  country: state.country,
});

export default connect(mapStateToProps)(Success);
