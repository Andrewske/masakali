// This hook contains the availability information for each retreat

import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../config';
import { createReservation } from '../actions/user';

const useRetreat = ({ name }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { isLoading, data, isError, error } = useQuery('getRetreat', () =>
    axios.get(serverUrl + `/reservations/retreats?name=${name}`)
  );

  const createBooking = (villaName) => {
    //createReservation();
    console.log('create booking');
  };

  if (error) {
    console.error({ error });
  }

  return { createBooking, data: data ?? null };
};

export default useRetreat;
