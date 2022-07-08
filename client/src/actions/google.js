import axios from 'axios';
import { serverUrl } from '../config';
import { SET_REVIEWS } from './types';

export const getReviews = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${serverUrl}/reviews/google`);
    dispatch({ type: SET_REVIEWS, payload: data });
  } catch (err) {
    console.error({ location: 'getReviews', err });
  }
};
