import axios from 'axios';
import { LOAD_VILLAS, SET_BLOCKED_DATES } from './types';
import { serverUrl } from '../config';

export const loadVillas = () => async (dispatch) => {
  try {
    let res = await axios.get(serverUrl + '/villas');

    let data = res.data.reduce((acc, villa) => {
      acc[villa.name] = villa;
      return acc;
    }, {});

    console.log({ data });

    dispatch({ type: LOAD_VILLAS, payload: data });
  } catch (err) {
    console.log({ err });
  }
};

export const getBlockedDates = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/smoobu/bookings/bookedDates');
    console.log(data);

    dispatch({
      type: SET_BLOCKED_DATES,
      payload: data,
    });
  } catch (err) {
    console.error({ location: 'getBlockedDates', err });
  }
};
