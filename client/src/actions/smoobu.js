import axios from 'axios';
import {
  SET_BLOCKED_DATES,
  SET_VILLA_RATES,
  UPDATE_RESERVATION,
} from './types';
import { serverUrl } from '../config';
import moment from 'moment';

export const getVillaRates = () => async (dispatch) => {
  try {
    let { data } = await axios.get(serverUrl + '/smoobu/rates', {
      params: { startDate: moment().format('YYYY-MM-D') },
    });

    dispatch({
      type: SET_VILLA_RATES,
      payload: data,
    });
  } catch (err) {
    console.error({ location: 'getRates', err });
  }
};

export const getBlockedDates = () => async (dispatch) => {
  try {
    let { data } = await axios.get(serverUrl + '/smoobu/bookings/bookedDates');
    console.log(data);
    dispatch({
      type: SET_BLOCKED_DATES,
      payload: data,
    });
  } catch (err) {
    console.error({ location: 'getBlockedDates', err });
  }
};

export const makeReservation =
  ({
    startDate,
    endDate,
    name,
    firstName,
    lastName,
    email,
    guests,
    price,
    address: { line1, postal_code, city, state, country },
    phone = '',
    language = 'en',
  }) =>
  async (dispatch) => {
    let apartmentIds = {
      surya: 1115674,
      chandra: 1115668,
      jala: 1115671,
    };

    // Add Children

    try {
      let body = {
        arrivalDate: startDate,
        departureDate: endDate,
        channelId: 1466467,
        apartmentId: apartmentIds[name],
        arrivalTime: '14:00',
        departureTime: '11:00',
        firstName: firstName,
        lastName: lastName,
        adults: guests,
        price: price,
        priceStatus: 1,
        address: {
          street: line1,
          postalCode: postal_code,
          location: city + ', ' + state,
        },
        country: country,
        email: email,
        phone: phone,
        language: language,
      };
      // let { data } = await axios.post(
      //   serverUrl + '/smoobu/bookings/add',
      //   body,
      //   { headers: { 'Content-Type': 'application/json' } }
      // );

      // return { smoobuId: data.id };

      return { smoobuId: 21976543 };
    } catch (err) {
      console.error({ location: 'makeReservation', err });
    }
  };
