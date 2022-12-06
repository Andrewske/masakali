import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import { sendBookingConfirmation } from '../../../actions/sendgrid';

import { loadUser } from '../../../actions/auth';

const Success = ({ reservations }) => {
  const [reservation, setReservation] = useState(null);

  let price = useCurrencyFormat(reservation?.amount);
  let discount = useCurrencyFormat(reservation?.discount);
  let total = useCurrencyFormat(reservation?.total);
  let taxes = useCurrencyFormat(reservation?.taxes);

  useEffect(() => {
    let res =
      reservations.length > 0
        ? reservations.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))[0]
        : null;

    res.numDays =
      (moment(res.endDate) - moment(res.startDate)) / (60 * 60 * 24 * 1000);
    setReservation(res);
  }, [reservations]);

  // useEffect(() => {
  //   const sendEmail = async () => {
  //     let { _id, numDays, startDate, endDate, name } = reservation;
  //     let data = {
  //       id: _id,
  //       email: user.email,
  //       name: user?.firstName || user.name,
  //       villaName: name,
  //       startDate: startDate,
  //       endDate: endDate,
  //       price: price,
  //       numDays: numDays,
  //       discount: discount,
  //       taxes: taxes,
  //       total: total,
  //     };
  //     await sendBookingConfirmation(data);
  //     loadUser(user._id);
  //     setIsSending(false);
  //   };

  //   if (isSending && price && reservation && !reservation.sentEmail) {
  //     console.log('Sending');
  //     sendEmail();
  //   }
  // }, [price, reservation, isSending]);

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
                <p>{moment.utc(reservation.startDate).format('MMM DD YYYY')}</p>
                <p>2:00 PM</p>
              </div>
              <div className='date'>
                <p className='title'>Check out</p>
                <p>{moment.utc(reservation.endDate).format('MMM DD YYYY')}</p>
                <p>11:00 AM</p>
              </div>
            </div>
            <p>Number of guests: {reservation.guests}</p>
            <p>Total nights: {reservation.numDays}</p>
            <p>Price: {price}/night</p>
            <p>Discount: {discount}</p>
            <p>Taxes: {taxes}</p>
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
  user: state.user,
  reservations: state.user.reservations.past,
  country: state.country,
});

export default connect(mapStateToProps, {
  sendBookingConfirmation,
  loadUser,
})(Success);
