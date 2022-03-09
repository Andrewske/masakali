import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useCurrencyFormat = (amounts, setAmounts) => {
  const country = useSelector((state) => state.country);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: country.currency,
  });

  useEffect(() => {
    amounts &&
      setAmounts(
        amounts.map((num) => formatter.format(num * country.conversion))
      );
  }, [amounts]);
};

export default useCurrencyFormat;
