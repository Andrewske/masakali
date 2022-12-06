import axios from 'axios';
import { serverUrl } from '../config';

export const sendBookingConfirmation = async (body) => {
  try {
    let { data, error } = await axios.post(
      serverUrl + '/sendgrid/sendBookingConfirmation',
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log(data);

    if (error) {
      console.error({ location: 'sendBookingConfirmation', error });
    }
    return true;
  } catch (err) {
    console.error({ location: 'sendBookingConfirmation', err });
  }
};

export const sendPasswordReset = async ({ email }) => {
  let body = { email };
  try {
    let { data, error } = await axios.post(
      serverUrl + '/sendgrid/sendPasswordReset',
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (error) {
      console.error({ location: 'sendPasswordReset', error });
      return { error: error };
    }
    return { error: null };
  } catch (err) {
    console.error({ location: 'sendPasswordReset', err });
    return { error: err.message };
  }
};

export const sendAdminBookingConfirmation = async (body) => {
  try {
    let { data, error } = await axios.post(
      serverUrl + '/sendgrid/sendAdminBookingConfirmation',
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (error) {
      console.error({ location: 'sendAdminBookingConfirmation', error });
    }
    return true;
  } catch (err) {
    console.error({ location: 'sendAdminBookingConfirmation', err });
  }
};
