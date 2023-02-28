const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('config');
const apiKey = process.env.SMOOBU_API_KEY;
const suryaId = config.get('SMOOBU_SURYA_ID');
const chandraId = config.get('SMOOBU_CHANDRA_ID');
const jalaId = config.get('SMOOBU_JALA_ID');
const akashaId = config.get('SMOOBU_AKASHA_ID');
const lakshmiId = config.get('SMOOBU_LAKSHMI_ID');
const moment = require('moment');
const getCurrency = require('../../components/currency');
const qs = require('qs');
const SmoobuReservation = require('../../models/SmoobuReservation');
const VillaRates = require('../../models/VillaRates');
const {
  getRates,
  updateRates,
  blockVillas,
  formatBlockedDates,
} = require('../../components/smoobu');

let smoobuBookings = require('../../smoobuBookings.json');

let reqConfig = {
  headers: {
    'Api-Key': apiKey,
  },
};

router.get('/rates_new', async (req, res) => {
  const today = moment();

  let { startDate = today, endDate = today.clone().add(2, 'y') } = req.query;
  try {
    // this needs to change since now I store the rates on a per day basis then per villa
    // first I need to check the database for the most recent prices

    console.log(startDate, endDate);

    let lastUpdated = await VillaRates.findOne({
      date: moment(startDate).format('YYYY-MM-DD'),
    });

    // if they were not updated today then we need to get new rates and send that data
    // depending on what the format the db retruns, I may need to update the format that getRates() returns

    console.log('lastUpdated', lastUpdated);

    if (lastUpdated?.updatedAt < today) {
      let currentRates = await getRates();
      return res.status(200).send(currentRates);
    }

    // else get all the dates for the next two years and send that

    // let rates = VillaRates.findAll(date >= startDate ?? today & date <= endDate)

    let rates = await VillaRates.find();

    //console.log('rates', rates)

    return res
      .status(200)
      .send(rates.sort((a, b) => moment(a.date) - moment(b.date)));

    // so this should return data like this (not sure how it will return from the database)
    // {
    //   {
    //    'date': '2023-02-16',
    //    'surya': 1200000,
    //    'chandra': 1200000,
    //    'jala': 1000000,
    //    'akasha': 2000000,
    //   },
    //   {
    //    'date': '2023-02-17',
    //    'surya': 1200000,
    //    'chandra': 1200000,
    //    'jala': 1000000,
    //    'akasha': 2000000,
    //   },
    // }
    // so the main reason for doing this would be that it is easier to check for a certain date range in one query
    // however, unless a specific date range is specified then there will always be 730(1) records returned with 4 lines each.
    // so if we are checking for the prices when a guest is booking we would check each day for rates[date][villa] for date in dates
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get('/rates', async (req, res) => {
  const today = moment();

  let { startDate = today, endDate = today.clone().add(2, 'y') } = req.query;
  try {
    reqConfig.params = {
      start_date: moment(startDate).format('YYYY-MM-DD'),
      end_date: moment(endDate).format('YYYY-MM-DD'),
      apartments: [suryaId, chandraId, jalaId, akashaId],
    };

    let {
      data: { data },
    } = await axios.get('https://login.smoobu.com/api/rates', reqConfig);

    data['surya'] = data[suryaId];
    data['chandra'] = data[chandraId];
    data['jala'] = data[jalaId];
    data['akasha'] = data[akashaId];

    delete data[suryaId];
    delete data[chandraId];
    delete data[jalaId];
    delete data[akashaId];

    let updates = [];
    for (const [villa, dates] of Object.entries(data)) {
      for (const [date, rates] of Object.entries(dates)) {
        let update = updates.findIndex((e) => e.date === date);
        if (update >= 0) {
          updates[update][villa] = rates.price;
        } else {
          updates.push({ date, [villa]: rates.price });
        }
      }
    }

    let dbRes = await VillaRates.collection.bulkWrite(
      updates.map((u) => ({
        updateOne: {
          filter: { date: u.date },
          update: {
            $set: {
              date: u.date,
              surya: u.surya,
              chandra: u.chandra,
              jala: u.jala,
              akasha: u.akasha,
            },
          },
          upsert: true,
        },
      }))
    );
    // let response = await axios.get(
    //   `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API_KEY}&base_currency=IDR`
    // );

    let currency = await getCurrency('IDR');
    let USD = currency?.data?.USD?.value ?? 0.000068;

    for (const [key, value] of Object.entries(data)) {
      Object.keys(value).map((d, i) => {
        value[d].price *= USD;
      });
    }

    res.status(200).send(data);
  } catch (err) {
    console.error({ err });
    res.status(422).send({ err });
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
      console.log('calling smoobu');

      pageCount = data?.page_count;
      bookings = [...bookings, ...data?.bookings];

      pageNumber += 1;
    }

    let blockedDates = formatBlockedDates(bookings);

    res.status(200).send(blockedDates);
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

const formatBookingData = (data) => {
  return {
    smoobuId: data.id,
    type: data.type,
    startDate: data.arrival,
    endDate: data.departure,
    createdAt: data['created-at'],
    updatedAt: data.modifiedAt,
    cancelled: data.type === 'cancellation',
    villaId: data.apartment?.id,
    channelId: data.channel?.id,
    guestName: data['guest-name'],
    email: data.email,
    phone: data.phone,
    adults: data.adults,
    children: data.children,
    total: data.price,
    commission: data['commission-included'],
    notice: data.notice,
    extraNotice: data.assistantNotice,
  };
};

router.post('/hook', express.json(), async (req, res) => {
  try {
    console.log(req.body);
    let action = req.body?.action;
    let data = formatBookingData(req.body?.data);
    let dbRes = null;

    switch (action) {
      case 'updateRates':
        let rates = getRates();
        dbRes = updateRates(rates);
      case 'newReservation':
        //if Akasha then book Lakshmi
        if (data.villaId === akashaId) {
          blockVillas({
            villas: [lakshmiId],
            startDate: data.startDate,
            endDate: data.endDate,
          });
        }
        //if Lakshmi then book Akasha and open Prishma
        if (data.villaId === lakshmiId) {
          blockVillas({
            villas: [akashaId],
            startDate: data.startDate,
            endDate: data.endDate,
          });
        }

      //if Isvara
      default:
        dbRes = await SmoobuReservation.updateOne(
          { smoobuId: data.smoobuId },
          data,
          { upsert: true }
        );
    }

    //console.log(dbRes);

    res.status(200).end();
  } catch (err) {
    console.error(err);
  }
});

router.post('/populateBookings', express.json(), async (req, res) => {
  try {
    let bookings = smoobuBookings?.bookings;

    if (bookings) {
      let bulkList = bookings.map((b) => ({
        updateOne: {
          filter: { smoobuId: b.id },
          update: {
            $set: {
              smoobuId: b.id,
              type: b.type,
              startDate: b.arrival,
              endDate: b.departure,
              createdAt: b['created-at'],
              updatedAt: b.modifiedAt,
              cancelled: b.type === 'cancellation',
              villaId: b.apartment?.id,
              channelId: b.channel?.id,
              guestName: b['guest-name'],
              email: b.email,
              phone: b.phone,
              adults: b.adults,
              children: b.children,
              total: b.price,
              commission: b['commission-included'],
              notice: b.notice,
              extraNotice: b.assistantNotice,
            },
          },
          upsert: true,
        },
      }));

      let dbres = await SmoobuReservation.collection.bulkWrite(bulkList);

      res.status(200).send(dbres);
    }
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/populateRates', express.json(), async (req, res) => {
  try {
    let data = getRates();

    let dbRes = updateRates(data);

    res.status(200).send(dbRes);
  } catch (err) {
    console.error('populate rates error', err.message);
  }
});

module.exports = router;
