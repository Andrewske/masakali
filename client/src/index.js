import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { serverUrl } from './config';
import axios from 'axios';

(async () => {
  let stripePromise;

  if (process.env.NODE_ENV === 'production') {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
        url: `${serverUrl}/stripe/payment/config`,
        withCredentials: true,
      };
      const { publishableKey } = await axios(config).then((r) => r.data);
      stripePromise = loadStripe(publishableKey);
    } catch (error) {
      console.log('Could not load stripe: ', error.message);
    }
  } else {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
        url: `${serverUrl}/stripe/payment/config`,
        withCredentials: true,
      };
      const { publishableKey } = await axios(config).then((r) => r.data);
      stripePromise = loadStripe(publishableKey);
    } catch (error) {
      console.log('Could not load stripe: ', error.message);
    }
    //stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  }

  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();
