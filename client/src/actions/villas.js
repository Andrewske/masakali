import axios from 'axios';
import { LOAD_VILLAS } from './types';
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
