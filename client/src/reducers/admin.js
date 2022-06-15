import { ADMIN_GET_USERS, ADMIN_GET_ERRORS } from '../actions/types';
const initialState = {
  users: [],
  errors: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ADMIN_GET_ERRORS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
