import { useState } from 'react';
import useVillaPrice from './useVillaPrice';
import { calcDiscount, calcTaxes, calcTotal } from '../utils/getPrices';

const useReservation = ({ villa = 'surya', checkIn, checkOut, guests }) => {
  const villaPrice = useVillaPrice(checkIn, checkOut, villa);
  const numDays = checkOut.diff(checkIn, 'days');

  return {
    numDays,
    amount: villaPrice,
    discount: calcDiscount({ villaPrice, numDays }),
    taxes: calcTaxes({ villaPrice, numDays }),
    total: calcTotal({ villaPrice, numDays }),
    name: villa,
    guests,
    img: null,
  };
};

export default useReservation;
