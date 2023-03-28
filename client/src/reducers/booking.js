import { CREATE_BOOKING, UPDATE_BOOKING } from '../actions/types';

const initialState = {
  retreatName: null,
  isRetreat: false,
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
    case CREATE_BOOKING:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
