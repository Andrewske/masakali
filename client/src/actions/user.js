import axios from 'axios';
import { LOAD_USER, UPDATE_RESERVATION } from './types';
import { serverUrl, percDiscount } from '../config';

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
    reservation: { startDate, endDate, name, amount, discount, taxes, total, numDays, guests },
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
