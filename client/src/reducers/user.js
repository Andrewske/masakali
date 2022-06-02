import {
  LOAD_USER,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  REMOVE_RESERVATION,
  UPDATE_PRICING,
} from '../actions/types';

const initialState = {
  firstName: null,
  lastName: null,
  name: null,
  email: null,
  address: {},
  admin: false,
  reservations: {
    new: null,
    past: [],
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      console.log({ state, payload });
      return {
        ...state,
        ...payload,
        reservations: {
          ...state.reservations,
          past: payload.reservations.past,
        },
      };
    case CREATE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: payload,
        },
      };
    case UPDATE_PRICING:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: payload,
        },
      };
    case UPDATE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: null,
          past: [...state.reservations.past, payload],
        },
      };

    case REMOVE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: null,
        },
      };
    default:
      return state;
  }
}
