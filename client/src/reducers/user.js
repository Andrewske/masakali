import {
  LOAD_USER,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  REMOVE_RESERVATION,
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
      return {
        ...state,
        ...payload,
      };
    case CREATE_RESERVATION:
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
