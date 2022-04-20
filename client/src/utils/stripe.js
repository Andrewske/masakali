import axios from 'axios';
import { serverUrl } from '../config';

export const createPaymentIntent = async ({
  price,
  setCheckoutError,
  setIsProcessing,
}) => {
  try {
    const {
      data: { error: backendError, clientSecret },
    } = await axios.post(serverUrl + '/stripe/payment/create-payment-intent', {
      amount: price * 100,
    });
    if (backendError) {
      setCheckoutError(backendError.message);
      setIsProcessing(false);
      return;
    }

    return clientSecret;
  } catch (err) {
    console.error({ location: 'createPaymentIntent', err });
    setCheckoutError(err.message);
    setIsProcessing(false);
  }
};
