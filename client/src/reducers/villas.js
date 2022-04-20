import { LOAD_VILLAS, SET_BLOCKED_DATES } from '../actions/types';

const initialState = {
  surya: {},
  chandra: {},
  jala: {},
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
    default:
      return state;
  }
}
