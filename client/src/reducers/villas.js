/* eslint-disable import/no-anonymous-default-export */
import {
  LOAD_VILLAS,
  SET_BLOCKED_DATES,
  SET_VILLA_RATES,
  SET_REVIEWS,
} from '../actions/types';

const initialState = {
  surya: {},
  chandra: {},
  jala: {},
  reviews: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_VILLAS:
      return {
        ...state,
        surya: { ...payload.surya },
        chandra: { ...payload.chandra },
        jala: { ...payload.jala },
      };
    case SET_BLOCKED_DATES:
      return {
        ...state,
        surya: {
          ...state.surya,
          datesReserved: payload.surya,
        },
        chandra: {
          ...state.chandra,
          datesReserved: payload.chandra,
        },
        jala: {
          ...state.jala,
          datesReserved: payload.jala,
        },
      };
    case SET_VILLA_RATES:
      return {
        ...state,
        surya: {
          ...state.surya,
          rates: payload.surya,
        },
        chandra: {
          ...state.chandra,
          rates: payload.chandra,
        },
        jala: {
          ...state.jala,
          rates: payload.jala,
        },
      };
    case SET_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    default:
      return state;
  }
}
