import { SET_RETREAT, CREATE_RETREAT_RESERVATION } from '../actions/types';

const initialState = {
  retreatName: null,
  villaName: null,
  numberOfGuests: 1,
  guests: [],
  totalUSD: null,
  stripeId: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_RETREAT:
      return {
        ...state,
        retreatName: payload.data,
      };
    case CREATE_RETREAT_RESERVATION:
      const { retreatName, villaName, numberOfGuests, totalUSD } = payload;
      return {
        ...state,
        retreatName,
        villaName,
        numberOfGuests,
        totalUSD,
      };
    default:
      return state;
  }
}
