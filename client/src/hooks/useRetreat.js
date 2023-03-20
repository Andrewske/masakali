// This hook contains the availability information for each retreat

import { useState } from 'react';

import axios from 'axios';
import { serverUrl } from '../config';

import { useSelector, useDispatch } from 'react-redux';

import { CREATE_RETREAT_RESERVATION } from '../actions/types';
import { calcTaxes } from '../utils/getPrices';
import { sendBookingConfirmation } from '../actions/sendgrid';
import useCurrencyFormat from './useCurrencyFormat';
import { capitalize } from 'lodash';
import moment from 'moment';

const useRetreat = (retreatName) => {
  const reservation = useSelector((state) => state.retreatReservation);
  const [guestName, setGuestName] = useState(null);
  const [guestEmail, setGuestEmail] = useState(null);
  const dispatch = useDispatch();

  const { totalUSD, taxesUSD, villaName, startDate, endDate } = reservation;

  const formattedPrice = useCurrencyFormat(totalUSD);
  const formattedTaxes = useCurrencyFormat(taxesUSD);
  const formattedTotal = useCurrencyFormat(totalUSD + taxesUSD);

  let retreatData = {
    ...reservation,
  };

  let guest = {
    guestName,
    setGuestName,
    guestEmail,
    setGuestEmail,
  };

  const createBooking = ({ villaName, numberOfGuests, totalUSD }) => {
    dispatch({
      type: CREATE_RETREAT_RESERVATION,
      payload: {
        retreatName,
        villaName,
        numberOfGuests,
        totalUSD,
        taxesUSD: calcTaxes({ villaPrice: totalUSD, hasDiscount: false }),
      },
    });
  };

  const confirmBooking = ({ userId, name, email, stripeId = null }) => {
    const body = {
      retreatName,
      villaName,
      guests: [
        { name, email },
        guestName && guestEmail && { guestName, guestEmail },
      ],
      totalUSD: totalUSD + taxesUSD,
      stripeId,
    };
    axios.post(serverUrl + '/reservations/retreats/add', body);
  };

  const sendConfirmationEmail = async (emailData) => {
    emailData = {
      ...emailData,
      startDate: moment.utc(startDate).format('ddd MMM DD YYYY').toString(),
      endDate: moment.utc(endDate).format('ddd MMM DD YYYY').toString(),
      retreatName: capitalize(retreatName),
      villaName: capitalize(villaName),
      price: formattedPrice,
      taxes: formattedTaxes,
      total: formattedTotal,
    };
    try {
      await sendBookingConfirmation(emailData);

      if (guestName && guestEmail) {
        emailData = {
          ...emailData,
          name: guestName,
          email: guestEmail,
        };
        console.log({ name: 'guestTwo', emailData });
        await sendBookingConfirmation(emailData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    retreatData,
    guest,
    createBooking,
    sendConfirmationEmail,
    confirmBooking,
  };
};

export default useRetreat;
