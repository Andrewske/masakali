import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

(async () => {
  let stripePromise;

  if (process.env.NODE_ENV === 'production') {
    try {
      const { publishableKey } = await fetch('api/stripe/payment/config').then(
        (r) => r.json()
      );
      stripePromise = loadStripe(publishableKey);
    } catch (error) {
      console.log('Could not load stripe: ', error.message);
    }
  } else {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
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
