// This hook contains the availability information for each retreat

import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import axios from 'axios';
import { serverUrl } from '../config';

import { useSelector, useDispatch } from 'react-redux';

import retreats from '../components/layout/Retreats/retreats.json';
import { CREATE_RETREAT_RESERVATION } from '../actions/types';

const useRetreat = (retreatName) => {
  const reservation = useSelector((state) => state.retreatReservation);
  const dispatch = useDispatch();

  const { isLoading, data, isError, error } = useQuery('getRetreat', () =>
    axios.get(serverUrl + `/reservations/retreats?name=${retreatName}`)
  );

  let retreatData = { reservation, ...retreats[retreatName], data };

  const createBooking = ({ villaName, numberOfGuests, totalUSD }) => {
    dispatch({
      type: CREATE_RETREAT_RESERVATION,
      payload: {
        retreatName,
        villaName,
        numberOfGuests,
        totalUSD,
      },
    });
  };

  // useEffect(() => {
  //   console.log(reservation);
  // }, [reservation]);

  return { retreatData, createBooking };
};

export default useRetreat;
