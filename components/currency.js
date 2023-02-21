const Currency = require('../models/Currency');
const axios = require('axios');
const moment = require('moment');

module.exports = getCurrency = async (baseCurrency = 'USD') => {
  console.log('getCurrency', baseCurrency);
  
  let last = await Currency.findOne({ baseCurrency })
    .sort({ _id: -1 })
    .limit(1);

  let today = new Date();
  let prev = new Date(last?.createdAt);


  if (moment(today).format('YYYY-MM-DD') === moment(prev).format('YYYY-MM-DD') ) return last;

  try {
    let response = await axios.get(
      `https://api.currencyapi.com/v3/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=${baseCurrency}`
    );
    let newCurrency = new Currency({
      baseCurrency,
      data: response.data.data,
    });

    await newCurrency.save();

    return newCurrency;
  } catch (err) {
    console.error('getCurrency', { err });
    return last;
  }
};
