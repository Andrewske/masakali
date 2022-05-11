const Currency = require('../models/Currency');
const axios = require('axios');

module.exports = getCurrency = async (baseCurrency = 'USD') => {
  let last = await Currency.findOne({ baseCurrency })
    .sort({ _id: -1 })
    .limit(1)
    .then((data) => {
      let today = new Date();
      let prev = new Date(data?.createdAt);

      if (today.toDateString() == prev.toDateString()) {
        return data;
      } else {
        return null;
      }
    });

  if (last) {
    return last;
  } else {
    try {
      let response = await axios.get(
        `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=${baseCurrency}`
      );

      let newCurrency = new Currency({
        baseCurrency,
        data: response.data.data,
      });

      await newCurrency.save();

      return newCurrency;
    } catch (err) {
      console.error('getCurrency', { err });
      return null;
    }
  }
};
