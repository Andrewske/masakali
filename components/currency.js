const Currency = require('../models/Currency');
const axios = require('axios');

module.exports = getCurrency = async (baseCurrency = 'USD') => {
  console.log('getCurrency', baseCurrency);
  let last = await Currency.findOne({ baseCurrency })
    .sort({ _id: -1 })
    .limit(1);

  let today = new Date();
  let prev = new Date(last?.createdAt);

  if (today.toDateString() == prev.toDateString()) return last;

  try {
    let response = await axios.get(
<<<<<<< HEAD
      `https://api.currencyapi.com/v3/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=${baseCurrency}`
    );
    let newCurrency = new Currency({
      baseCurrency,
      data: response.data.data,
    });

    await newCurrency.save();

=======
      `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=${baseCurrency}`
    );

    let newCurrency = new Currency({
      baseCurrency,
      data: response.data.data,
    });

    await newCurrency.save();

>>>>>>> 2a874b6... fix default currency rates when api is broken
    return newCurrency;
  } catch (err) {
    console.error('getCurrency', { err });
    return last;
  }
};
