import { useState } from 'react';
import useVillaPrice from './useVillaPrice';
import { calcDiscount, calcTaxes, calcTotal } from '../utils/getPrices';

const useReservation = ({ checkIn, checkOut, guests }) => {
  const [villa, setVilla] = useState('surya');
  const villaPrice = useVillaPrice(checkIn, checkOut, villa);
  const numDays = checkOut.diff(checkIn, 'days');

  return {
    villa,
    setVilla,
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
