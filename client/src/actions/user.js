import axios from 'axios';
import { LOAD_USER, UPDATE_RESERVATION, UPDATE_PRICING } from './types';
import { serverUrl, percDiscount } from '../config';
import { calcDiscount, calcTaxes, calcTotal } from '../utils/getPrices';

export const updateUser = (data) => async (dispatch) => {
  try {
    let res = await axios.post(serverUrl + '/users/update', data);
    dispatch({ type: LOAD_USER, payload: res.data });
  } catch (err) {
    console.error({ err });
  }
};

export const createReservation =
  ({
    userId,
    reservation: {
      startDate,
      endDate,
      name,
      amount = 0,
      discount = 0,
      taxes = 0,
      total,
      guests,
      retreat = null,
    },
  }) =>
  async (dispatch) => {
    let data = {
      startDate,
      endDate,
      name,
      amount,
      discount,
      taxes,
      total,
      guests,
      source: 'website',
      userId,
      retreat,
    };

    try {
      let res = await axios.post(serverUrl + '/reservations/add', data);
      dispatch({
        type: 'RESERVATION_COMPLETE',
        payload: res.data,
      });

      return { reservationId: res.data._id };
    } catch (err) {
      console.error({ err });
    }
  };

export const updatePricing =
  ({ price, numDays, res }) =>
  async (dispatch) => {
    console.log('updatePricing', res);
    try {
      let discount = calcDiscount({ villaPrice: price, numDays });
      let amount = price;
      let taxes = calcTaxes({ villaPrice: price, numDays });
      let total = calcTotal({ villaPrice: price, numDays });

      dispatch({
        type: UPDATE_PRICING,
        payload: { ...res, discount, amount, taxes, total },
      });
    } catch (err) {
      console.error({ location: 'updatePricing', error: err.message });
    }
  };

export const updateReservation = (data) => async (dispatch) => {
  console.log('update reservation');
  try {
    let res = await axios.post(serverUrl + '/reservations/update', data);
    console.log(res.data);
    dispatch({ type: UPDATE_RESERVATION, payload: res.data });
  } catch (err) {
    console.error({ err });
  }
};

export const createError = (data) => async (dispatch) => {
  try {
    let res = await axios.post(serverUrl + '/users/error', data);
    return;
  } catch (err) {
    console.error({ location: 'createError', err });
  }
};
