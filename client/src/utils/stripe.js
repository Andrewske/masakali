import axios from 'axios';
import { serverUrl } from '../config';

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

  let paymentMethodReqId = data?.paymentMethod?.id || null
  let paymentMethodReqError = data?.error || null


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
