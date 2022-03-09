import axios from 'axios';
import { LOAD_VILLAS } from './types';

export const loadVillas = () => async (dispatch) => {
  try {
    let res = await axios.get('http://localhost:5000/api/villas');

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
