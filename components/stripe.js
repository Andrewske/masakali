require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
