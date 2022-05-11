const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Villa = require('../../models/Villa');

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

// Get all villas
router.get('/', async (req, res) => {
  try {
    let villas = await Villa.find();
    return res.status(200).send(villas);
  } catch (err) {
    console.log({ err });
    res.status(400).send({ err });
  }
});

// Get villa by name
router.get('/:name', async (req, res) => {
  try {
    let villa = await Villa.findOne({ name: req.params.name });
    if (villa) {
      return res.status(200).send(villa);
    }
  } catch (err) {
    console.log({ err });
  }
});

router.post('/add', express.json(), async (req, res) => {
  try {
    let {
      name,
      title = null,
      description = null,
      price = null,
      reducedPrice = null,
      datesReserved = [],
    } = req.body;

    name = name.toLowerCase();

    let data = { name, title, description, price, reducedPrice, datesReserved };

    let villa = await Villa.findOne({ name });

    if (villa) {
      let result = await Villa.updateOne(
        { name },
        { description, price, reducedPrice }
      );
      res.status(200).send(result.modifiedCount);
      return;
    }

    villa = new Villa(data);
    await villa.save();

    res.status(200).send(villa);
  } catch (err) {
    console.log({ err });
  }
});

module.exports = router;
