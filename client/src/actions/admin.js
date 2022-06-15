import axios from 'axios';
import { ADMIN_GET_USERS, ADMIN_GET_ERRORS } from './types';
import { serverUrl } from '../config';
import moment from 'moment';

export const getUsers = (req, res) => async (dispatch) => {
  try {
    let { data } = await axios.get(serverUrl + '/admin/users');

    console.log(data);

    dispatch({ type: ADMIN_GET_USERS, payload: data });
  } catch (err) {
    console.error({ location: 'getUsers', error: err.message });
  }
};

export const getErrors = (req, res) => async (dispatch) => {
  try {
    let { data } = await axios.get(serverUrl + '/admin/errors');

    const sorted = data.sort(
      (a, b) => moment(b.createdAt) - moment(a.createdAt)
    );

    dispatch({ type: ADMIN_GET_ERRORS, payload: sorted });
  } catch (err) {
    console.error({ location: 'getErrors', error: err.message });
  }
};
