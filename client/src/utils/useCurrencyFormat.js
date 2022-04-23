import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCurrencyFormat = (amount = 0) => {
  const [total, setTotal] = useState(0);
  const country = useSelector((state) => state.country);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: country.currency,
  });

  useEffect(() => {
    setTotal(formatter.format(amount * country.conversion));
  }, [amount, country, formatter]);

  return total;
};

export default useCurrencyFormat;
