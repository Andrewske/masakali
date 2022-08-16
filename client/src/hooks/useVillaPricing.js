import React from 'react';
import { useSelector } from 'react-redux';

const initialState = {
  surya: {
    isAvailable: false,
    pricePerNight: 150,
    total: 0,
    discount: 0,
    taxes: 0,
  },
  chandra: {
    isAvailable: false,
    pricePerNight: 150,
    total: 0,
    discount: 0,
    taxes: 0,
  },
  jala: {
    isAvailable: false,
    pricePerNight: 150,
    total: 0,
    discount: 0,
    taxes: 0,
  },
};

const useVillaPricing = ({ checkIn, checkOut }) => {
  const villas = useSelector((state) => state.message);

  return initialState;
};

export default useVillaPricing;
