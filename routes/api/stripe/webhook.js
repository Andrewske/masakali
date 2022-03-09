const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

router.post(
  '/',
  bodyParser.raw({ type: 'application/json' }),
  async (req, res) => {
    // const event = req.body;
    // console.log(event.type);
    // console.log(event.data.object);
    // console.log(event.data.object.id);
    // res.json({ success: true });

    const payload = req.body;
    const sig = req.headers['stripe-signature'];
    // only local
    const endpointSecret = process.env.STRIPE_LOCAL_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log({ error: err.message });
      res.status(422).send({ success: false });
    }

    console.log(event.type);
    console.log(event.data.object);
    console.log(event.data.object.id);
    res.json({ success: true });
  }
);

module.exports = router;
