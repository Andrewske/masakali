// This hook contains the availability information for each retreat

import { useState } from 'react';

import axios from 'axios';
import { serverUrl } from '../config';

import { useSelector, useDispatch } from 'react-redux';

import {
  CREATE_RETREAT_RESERVATION,
  UPDATE_RETREAT_RESERVATION,
} from '../actions/types';
import { calcTaxes } from '../utils/getPrices';
import {
  sendBookingConfirmation,
  sendAdminBookingConfirmation,
} from '../actions/sendgrid';
import useCurrencyFormat from './useCurrencyFormat';
import { capitalize } from 'lodash';
import moment from 'moment';

import retreatInfo from '../components/layout/Retreats/retreats';

const useRetreat = (retreatName) => {
  const reservation = useSelector((state) => state.retreatReservation);
  const [guestName, setGuestName] = useState(null);
  const [guestEmail, setGuestEmail] = useState(null);
  const dispatch = useDispatch();

  const { startDate, endDate } = retreatName
    ? retreatInfo[retreatName]
    : { startDate: null, endDate: null };

  const { priceUSD, taxesUSD, totalUSD, villaName, addOns, addOnsTotalUSD } =
    reservation;

  const formattedTotal = useCurrencyFormat(totalUSD);
  const formattedTaxes = useCurrencyFormat(taxesUSD);
  const formattedPrice = useCurrencyFormat(priceUSD);
  const formattedAddOns = useCurrencyFormat(addOnsTotalUSD);

  let retreatData = {
    ...reservation,
    formattedTotal,
    formattedTaxes,
    formattedPrice,
    formattedAddOns,
    startDate,
    endDate,
  };

  let guest = {
    guestName,
    setGuestName,
    guestEmail,
    setGuestEmail,
  };

  const createBooking = ({ villaName, numberOfGuests, priceUSD }) => {
    const taxes = calcTaxes({ villaPrice: priceUSD, hasDiscount: false });
    const totalUSD = priceUSD + taxes;
    dispatch({
      type: CREATE_RETREAT_RESERVATION,
      payload: {
        retreatName,
        villaName,
        numberOfGuests,
        priceUSD,
        taxesUSD: calcTaxes({ villaPrice: totalUSD, hasDiscount: false }),
        totalUSD,
        addOns,
      },
    });
  };

  const updateBooking = ({ addOns }) => {
    const addOnsTotalUSD = addOns
      .filter((x) => x.selected)
      .reduce((a, b) => a + b.priceUSD, 0);
    const taxesUSD = calcTaxes({
      villaPrice: priceUSD + addOnsTotalUSD,
      hasDiscount: false,
    });

    dispatch({
      type: UPDATE_RETREAT_RESERVATION,
      payload: {
        addOnsTotalUSD,
        addOns,
        taxesUSD,
        totalUSD: priceUSD + addOnsTotalUSD + taxesUSD,
      },
    });
  };

  const confirmBooking = ({ userId, name, email, stripeId = null }) => {
    const body = {
      retreatName,
      villaName,
      guests: [
        { userId, name, email },
        guestName && guestEmail && { guestName, guestEmail },
      ],
      priceUSD,
      taxesUSD,
      addOnsTotalUSD,
      totalUSD,
      stripeId,
      addOns,
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
      addOnsTotal: formattedAddOns,
    };
    try {
      await sendBookingConfirmation(emailData);

      if (guestName && guestEmail) {
        emailData = {
          ...emailData,
          name: guestName,
          email: guestEmail,
        };
        await sendBookingConfirmation(emailData);
      }

      await sendAdminBookingConfirmation(emailData);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    retreatData,
    guest,
    createBooking,
    sendConfirmationEmail,
    updateBooking,
    confirmBooking,
  };
};

export default useRetreat;
