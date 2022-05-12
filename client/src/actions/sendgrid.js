import axios from 'axios';
import { serverUrl } from '../config';
import moment from 'moment';
import useCurrencyFormat from '../utils/useCurrencyFormat';

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
  }) =>
  async (dispatch) => {
    let body = {
      id,
      email,
      name,
      villaName: villaName.toUpperCase(),
      startDate: moment.utc(startDate).format('ddd MMM DD YYYY').toString(),
      endDate: moment.utc(endDate).format('ddd MMM DD YYYY').toString(),
      price,
      numDays,
      discount,
      total,
    };

    console.log('here');
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
