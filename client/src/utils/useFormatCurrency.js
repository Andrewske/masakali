import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFormatCurrency = (amount, numDays) => {
  const [price, setPrice] = useState(amount);
  const [total, setTotal] = useState(0);
  const country = useSelector((state) => state.country);

  useEffect(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: country.currency,
    });
    setPrice(formatter.format(amount * country.conversion));
    setTotal(formatter.format(amount * numDays * country.conversion));
  }, [amount, country, numDays]);

  return { amount: price, total };
};

export default useFormatCurrency;
