import axios from 'axios';
import { serverUrl } from '../config';
import moment from 'moment';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import { capitalize } from 'lodash';
import { setAlert } from './alert';

export const sendBookingConfirmation =
  ({
    id,
    email,
    name,
    villaName,
    startDate,
    endDate,
    price,
    numDays,
    discount,
    total,
    taxes,
  }) =>
  async (dispatch) => {
    let body = {
      id,
      email,
      name,
      villaName: capitalize(villaName),
      startDate: moment.utc(startDate).format('ddd MMM DD YYYY').toString(),
      endDate: moment.utc(endDate).format('ddd MMM DD YYYY').toString(),
      price,
      numDays,
      discount,
      total,
      taxes,
    };

    try {
      let { data, error } = await axios.post(
        serverUrl + '/sendgrid/sendConfirmation',
        body,
        { headers: { 'Content-Type': 'application/json' } }
      );

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
