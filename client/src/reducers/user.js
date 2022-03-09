import {
  LOAD_USER,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  REMOVE_RESERVATION,
} from '../actions/types';

const initialState = {
  name: null,
  email: null,
  address: {},
  admin: false,
  reservations: {
    new: [],
    past: [],
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      let { name, email, address = {}, admin } = payload;
      return {
        ...state,
        name,
        email,
        address,
        admin,
      };
    case CREATE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: [...state.reservations.new, payload],
        },
      };
    case UPDATE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: state.reservations.new.filter(
            (res) =>
              res.startDate !== payload.startDate &&
              res.endDate !== payload.endDate &&
              res.name !== payload.name
          ),
          past: [...state.reservations.past, payload],
        },
      };

    case REMOVE_RESERVATION:
      return {
        ...state,
        reservations: {
          ...state.reservations,
          new: state.reservations.new.filter(
            (res) =>
              res.startDate !== payload.startDate &&
              res.endDate !== payload.endDate &&
              res.name !== payload.name
          ),
        },
      };
    default:
      return state;
  }
}
