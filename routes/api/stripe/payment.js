require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const express = require('express');
const router = express.Router();

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

router.post('/create-payment-intent', bodyParser.json(), async (req, res) => {
  let { amount = 999, currency = 'usd', paymentMethodType = 'card' } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount),
      currency,
      payment_method_types: [paymentMethodType],
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get('/config', async (req, res) => {
  res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

module.exports = router;
