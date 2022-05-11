const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('config');
const apiKey = process.env.SMOOBU_API_KEY;
const suryaId = config.get('SMOOBU_SURYA_ID');
const chandraId = config.get('SMOOBU_CHANDRA_ID');
const jalaId = config.get('SMOOBU_JALA_ID');
const moment = require('moment');
const qs = require('qs');
const cors = require('cors');

let reqConfig = {
  headers: {
    'Api-Key': apiKey,
  },
};

const whitelist = [
  'http://localhost:3000',
  'https://www.masakaliretreat.com',
  'https://masakaliretreat.com',
  'https://staging.masakaliretreat.com',
  'https://staging.masakaliretreat.com/',
  'staging.masakaliretreat.com',
];

router.all('*', (req, res, next) => {
  var origin = req.headers.origin || req.headers.referer;
  if (whitelist.indexOf(origin) != -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', [
    'Content-Type',
    'X-Requested-With',
    'X-HTTP-Method-Override',
    'Accept',
  ]);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Cache-Control', 'no-store,no-cache,must-revalidate');
  res.header('Vary', 'Origin');
  if (req.method === 'OPTIONS') {
    res.status(200).send('');
    return;
  }
  next();
});

router.get('/rates', cors(), async (req, res) => {
  let { startDate = null, endDate = null } = req.query;
  try {
    reqConfig.params = {
      start_date: startDate || moment().format('YYYY-MM-D'),
      end_date: endDate || moment().add(1, 'years').format('YYYY-MM-D'),
      apartments: [suryaId, chandraId, jalaId],
    };

    let {
      data: { data },
    } = await axios.get('https://login.smoobu.com/api/rates', reqConfig);

    data['surya'] = data[suryaId];
    data['chandra'] = data[chandraId];
    data['jala'] = data[jalaId];

    delete data[suryaId];
    delete data[chandraId];
    delete data[jalaId];

    let response = await axios.get(
      `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=IDR`
    );

    let USD = response.data.data.USD;

    for (const [key, value] of Object.entries(data)) {
      Object.keys(value).map((d, i) => {
        value[d].price *= USD;
      });
    }

    res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
    res.status(422).send(err.message);
  }
});

router.get('/bookings/bookedDates', async (req, res) => {
  try {
    let pageCount = 2;
    let pageNumber = 1;
    let bookings = [];

    while (pageNumber <= pageCount) {
      reqConfig.params = { pageSize: 100, page: pageNumber };
      let { data } = await axios.get(
        'https://login.smoobu.com/api/reservations',
        reqConfig
      );

      pageCount = data?.page_count;
      bookings = [...bookings, ...data?.bookings];

      pageNumber += 1;
    }

    let bookedDates = {
      surya: bookings
        .filter((b) => b.apartment.id === suryaId)
        .map((b) => ({ startDate: b.arrival, endDate: b.departure })),
      chandra: bookings
        .filter((b) => b.apartment.id === chandraId)
        .map((b) => ({ startDate: b.arrival, endDate: b.departure })),
      jala: bookings
        .filter((b) => b.apartment.id === jalaId)
        .map((b) => ({ startDate: b.arrival, endDate: b.departure })),
    };

    res.status(200).send(bookedDates);
  } catch (error) {
    console.error({ error });
    res.status(422).send('Sorry there was a problem');
  }
});

/*
Add a booking
Example Body
{
  "arrivalDate": "2023-06-12",
  "departureDate": "2023-06-20",
  "channelId": 1466467,
  "apartmentId": 1115674,
  "arrivalTime": "14:00",
  "departureTime": "11:00",
  "firstName": "Test",
  "lastName": "123",
  "notes": "",
  "adults": 1,
  "children": 0,
  "price": 2200000,
  "priceStatus": 1,
  "address": {
    "street": "123 test rd",
    "postalCode": "98208",
    "location": "Seattle, WA"
  },
  "country": "US",
  "email": "andrewskevin92@gmail.com",
  "phone": "",
  "language": "en",
  "priceElement": [
    {
      "type": "basePrice",
      "name": "Base Price",
      "amount": 153.02,
      "currencyCode": "USD"
    }
  ]
}
*/

router.post('/bookings/add', express.json(), async (req, res) => {
  console.log('adding a booking');
  try {
    reqConfig.headers = {
      ...reqConfig.headers,
      'Content-Type': 'application/json',
    };

    let { data } = await axios.post(
      'https://login.smoobu.com/api/reservations',
      req.body,
      reqConfig
    );
    res.status(200).send(data);
  } catch (error) {
    console.error(error.response.data);
    res.status(422).send({ error });
  }
});

router.get('/bookings/delete', async (req, res) => {
  try {
    const { id } = req.query;

    let { data } = await axios.delete(
      `https://login.smoobu.com/api/reservations/${id}`,
      reqConfig
    );

    res.send({ data });
  } catch (error) {
    console.error({ error });
    res.status(422).send({ error });
  }
});

module.exports = router;
