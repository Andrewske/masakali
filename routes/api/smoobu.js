const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('config');
const apiKey = config.get('SMOOBU_API_KEY');
const suryaId = config.get('SMOOBU_SURYA_ID');
const chandraId = config.get('SMOOBU_CHANDRA_ID');
const jalaId = config.get('SMOOBU_JALA_ID');

let reqConfig = {
  headers: {
    'Api-Key': apiKey,
  },
};

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
  try {
    reqConfig.headers = {
      ...reqConfig.headers,
      'Content-Type': 'application/json',
    };
    let data = req.body;

    console.log(data);

    // let { data } = await axios.post(
    //   'https://login.smoobu.com/api/reservations',
    //   req.body,
    //   reqConfig
    // );

    res.send(data);
  } catch (error) {
    console.error({ error });
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
