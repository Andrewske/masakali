import axios from 'axios';
import { serverUrl } from '../config';

import { useState } from 'react';

export const stripeCheckout = async ({
  price,
  stripe,
  cardElement,
  billingDetails,
}) => {
  try {
    // Create Payment Intent
    const { clientSecret, paymentIntentError } = await createPaymentIntent({
      price,
    });

    console.log({ clientSecret, paymentIntentError });

    if (paymentIntentError) throw paymentIntentError;

    // Create the Payment Method Request
    const { paymentMethodReqId, paymentMethodReqError } =
      await createPaymentMethodReq({ stripe, cardElement, billingDetails });

    console.log({ paymentMethodReqId, paymentMethodReqError });

    if (paymentMethodReqError) throw paymentMethodReqError;

    const { paymentIntent, confirmCardPaymentError } = await confirmCardPayment(
      { stripe, clientSecret, paymentMethodReqId }
    );

    console.log({ paymentIntent, confirmCardPaymentError });

    if (confirmCardPaymentError) throw confirmCardPaymentError;

    return { paymentIntent, error: null };
  } catch (err) {
    console.error({ err });
    return { paymentIntent: null, error: err };
  }
};

export const createPaymentIntent = async ({ price }) => {
  try {
    const {
      data: { error: paymentIntentError, clientSecret },
    } = await axios.post(serverUrl + '/stripe/payment/create-payment-intent', {
      amount: price,
    });

    return { clientSecret, paymentIntentError };
  } catch (err) {
    console.error({ location: 'createPaymentIntent', err });
    return { paymentIntentError: err };
  }
};

export const createPaymentMethodReq = async ({
  stripe,
  cardElement,
  billingDetails,
}) => {
  const data = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: billingDetails,
  });

  let paymentMethodReqId = data?.paymentMethod?.id || null;
  let paymentMethodReqError = data?.error || null;

  return { paymentMethodReqId, paymentMethodReqError };
};

export const confirmCardPayment = async ({
  stripe,
  clientSecret,
  paymentMethodReqId,
}) => {
  try {
    const { error: confirmCardPaymentError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReqId,
      });

    return { paymentIntent, confirmCardPaymentError };
  } catch (err) {
    console.error({ location: 'confirmCardPayment', err });
    return { confirmCardPaymentError: err };
  }
};
