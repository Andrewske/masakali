require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
let stripe;
if (process.env.NODE_ENV !== 'production') {
  stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
} else {
  stripe = require('stripe')(process.env.STRIPE_LIVE_KEY);
}

const express = require('express');
const router = express.Router();

// Stripe Customer Documentation: https://stripe.com/docs/api/customers/list?lang=node

router.get('/', bodyParser.json(), async (req, res) => {
  let { id = null } = req.body;

  if (!id) {
    res.status(422).send({ error: 'Invalid Id' });
  }

  try {
    const customer = await stripe.customers.retrieve(id);
    res.status(200).send({ customer });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get('/all', bodyParser.json(), async (req, res) => {
  let { limit = 10 } = req.body;
  try {
    const customer = await stripe.customers.list({ limit });
    res.status(200).send({ customer });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.post('/create', bodyParser.json(), async (req, res) => {
  let {
    name = null,
    city = null,
    country = null,
    line1 = null,
    line2 = null,
    postal_code = null,
    state = null,
    email = null,
    description = null,
    payment_method = null,
    phone = null,
  } = req.body;

  try {
    const customer = await stripe.customers.create({
      name: name === null ? undefined : name,
      address: {
        city: city === null ? undefined : city,
        country: country === null ? undefined : country,
        line1: line1 === null ? undefined : line1,
        line2: line2 === null ? undefined : line2,
        postal_code: postal_code === null ? undefined : postal_code,
        state: state === null ? undefined : state,
      },
      email: email === null ? undefined : email,
      description: description === null ? undefined : description,
      payment_method: payment_method === null ? undefined : payment_method,
      phone: phone === null ? undefined : phone,
    });
    res.status(200).send({ customer });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post('/update', bodyParser.json(), async (req, res) => {
  let {
    id = null,
    name = null,
    city = null,
    country = null,
    line1 = null,
    line2 = null,
    postal_code = null,
    state = null,
    email = null,
    description = null,
    payment_method = null,
    phone = null,
  } = req.body;

  if (!id) {
    res.status(422).send({ error: 'Invalid Id' });
  }

  try {
    const customer = await stripe.customers.update(id, {
      name: name === null ? undefined : name,
      address: {
        city: city === null ? undefined : city,
        country: country === null ? undefined : country,
        line1: line1 === null ? undefined : line1,
        line2: line2 === null ? undefined : line2,
        postal_code: postal_code === null ? undefined : postal_code,
        state: state === null ? undefined : state,
      },
      email: email === null ? undefined : email,
      description: description === null ? undefined : description,
      payment_method: payment_method === null ? undefined : payment_method,
      phone: phone === null ? undefined : phone,
    });
    res.status(200).send({ customer });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post('/delete', bodyParser.json(), async (req, res) => {
  let { id = null } = req.body;

  if (!id) {
    res.status(422).send({ error: 'Invalid Id' });
  }

  try {
    const customer = await stripe.customers.del(id);
    res.status(200).send({ customer });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
