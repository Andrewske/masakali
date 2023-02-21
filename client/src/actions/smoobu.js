import axios from 'axios';
import { SET_BLOCKED_DATES, SET_VILLA_RATES } from './types';
import getDaysBetweenDates from '../utils/getDaysBetweenDates';
import { serverUrl } from '../config';
import moment from 'moment';

export const getVillaRates = () => async (dispatch) => {
  console.log('getting villa rates');
  try {
    let { data } = await axios.get(serverUrl + '/smoobu/rates', {
      params: { startDate: moment.utc().format('YYYY-MM-DD') },
    });

    dispatch({
      type: SET_VILLA_RATES,
      payload: data,
    });

    return data;
  } catch (err) {
    console.error({ location: 'getRates', err });
  }
};

export const getBlockedDates = () => async (dispatch) => {
  try {
    let { data } = await axios.get(serverUrl + '/smoobu/bookings/bookedDates');

    // Map through the startDates and endDates provided by Smoobu and create
    // checkInDates, checkoutDates, and blockedDates for each

    console.log({data})

    let results = {
      surya: {
        checkInDates: [],
        checkOutDates: [],
        blockedDates: [],
      },
      chandra: {
        checkInDates: [],
        checkOutDates: [],
        blockedDates: [],
      },
      jala: {
        checkInDates: [],
        checkOutDates: [],
        blockedDates: [],
      },
      akasha: {
        checkInDates: [],
        checkOutDates: [],
        blockedDates: [],
      },
    };

    for (const [name, dates] of Object.entries(data)) {
      dates.forEach((date) => {
        results[name] = {
          checkInDates: [...results[name].checkInDates, date.startDate],
          checkOutDates: [...results[name].checkOutDates, date.endDate],
          blockedDates: [
            ...results[name].blockedDates,
            ...getDaysBetweenDates({
              startDate: date.startDate,
              endDate: date.endDate,
            }),
          ],
        };
      });
    }

    dispatch({
      type: SET_BLOCKED_DATES,
      payload: results,
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
      akasha: 1574678,
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

      // Don't create the smoobu booking if in development
      if (process.env.NODE_ENV !== 'production') {
        return { smoobuId: 'test' };
      }

      let { data } = await axios.post(
        serverUrl + '/smoobu/bookings/add',
        body,
        { headers: { 'Content-Type': 'application/json' } }
      );

      return { smoobuId: data.id };
    } catch (err) {
      console.error({ location: 'makeReservation', err });
    }
  };
