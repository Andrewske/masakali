import {
  SET_RETREAT,
  CREATE_RETREAT_RESERVATION,
  UPDATE_RETREAT_RESERVATION,
} from '../actions/types';

const initialState = {
  retreatName: null,
  villaName: null,
  numberOfGuests: 1,
  guests: [],
  priceUSD: null,
  totalUSD: null,
  taxesUSD: null,
  addOnsTotalUSD: null,
  stripeId: null,
  addOns: [
    {
      id: 'transferToAirport',
      title: 'Transfer to Airport',
      priceUSD: 27,
      selected: false,
    },
    {
      id: 'transferFromAirport',
      title: 'Transfer from Airport',
      priceUSD: 27,
      selected: false,
    },
    {
      id: 'detoxMeals',
      title: 'Detox Meals',
      priceUSD: 185,
      selected: false,
    },
  ],
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
      return {
        ...state,
        ...payload,
      };
    case UPDATE_RETREAT_RESERVATION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
