const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('./middleware/cors');

router.get('/', express.json(), cors(), async (req, res) => {
  console.log('currency');
  try {
    let response = await axios.get(
      `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=USD`
    );
    console.log('Currency running');
    res.status(200).send(response.data.data);
  } catch (err) {
    console.error({ err });
    res.status(422).json({ err });
  }
});

module.exports = router;
