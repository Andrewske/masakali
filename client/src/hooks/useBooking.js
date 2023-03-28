import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { serverUrl } from '../config';

import { CREATE_BOOKING, UPDATE_BOOKING } from '../actions/types';
import useCurrencyFormat from './useCurrencyFormat';

// Booking States
// {
//     startDate,
//     endDate,
//     villaName,
//     numberOfGuests,
//     priceUSD,
//     taxesUSD,
//     totalUSD,
//     addOns,
//     isRetreat,
//     retreatName,
// }

const useBooking = () => {
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const {
    startDate,
    endDate,
    priceUSD,
    taxesUSD,
    totalUSD,
    villaName,
    addOns,
    addOnsTotalUSD,
  } = booking;

  const formattedTotal = useCurrencyFormat(totalUSD);
  const formattedTaxes = useCurrencyFormat(taxesUSD);
  const formattedPrice = useCurrencyFormat(priceUSD);
  const formattedAddOns = useCurrencyFormat(addOnsTotalUSD);

  return <div>useBooking</div>;
};

export default useBooking;
