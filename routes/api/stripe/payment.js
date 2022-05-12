//require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const express = require('express');
const router = express.Router();

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
    console.log({ err });
    res.status(422).send({ error: err.message });
  }
});

router.get('/config', async (req, res) => {
  res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

module.exports = router;
