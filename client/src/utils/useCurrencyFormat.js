import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCurrencyFormat = (amount = null) => {
  const [total, setTotal] = useState(null);
  const country = useSelector((state) => state.country);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: country.currency,
  });

  useEffect(() => {
    if (amount && country) {
      setTotal(formatter.format(amount * country.conversion));
    }

    console.log({
      amount,
      country,
      format: formatter.format(amount * country.conversion),
    });
  }, [amount, country, formatter]);

  return total;
};

export default useCurrencyFormat;
