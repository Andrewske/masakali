import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const useCurrencyFormat = (amount = null) => {
  const [total, setTotal] = useState(null);
  const country = useSelector((state) => state.country);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: country.currency,
      }),
    [country]
  );

  useEffect(() => {
    if (amount && country) {
      setTotal(formatter.format(amount * country.conversion));
    }
  }, [amount, country, formatter]);

  return total;
};

export default useCurrencyFormat;
