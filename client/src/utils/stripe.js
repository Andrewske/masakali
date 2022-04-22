import axios from 'axios';
import { serverUrl } from '../config';

export const createPaymentIntent = async ({ price }) => {
  console.log('this is happening', price);
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
  try {
    const {
      paymentMethod: { id: paymentMethodReqId },
      error: paymentMethodReqError,
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });

    return { paymentMethodReqId, paymentMethodReqError };
  } catch (err) {
    console.error({ location: 'createPaymentMethodReq', err });
    return { paymentMethodReqError: err };
  }
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
