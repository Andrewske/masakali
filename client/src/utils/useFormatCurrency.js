import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const percDiscount = 0.1;

const useFormatCurrency = (amount, numDays) => {
  const [price, setPrice] = useState(amount);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const country = useSelector((state) => state.country);

  useEffect(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: country.currency,
    });
    let disc = amount * numDays * percDiscount * country.conversion;

    setDiscount(formatter.format(disc));
    setPrice(formatter.format(amount * country.conversion));
    let tot = formatter.format(
      amount * (1 - percDiscount) * numDays * country.conversion
    );
    setTotal(tot);
  }, [amount, country, numDays]);

  return { amount: price, total, discount };
};

export default useFormatCurrency;
