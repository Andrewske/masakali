import axios from 'axios';
import { SET_BLOCKED_DATES } from './types';

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
