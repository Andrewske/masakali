import { ADD_PACKAGE, REMOVE_PACKAGE } from '../actions/types';
import useCurrencyFormat from '../hooks/useCurrencyFormat';
import useConversionRate from '../hooks/useConversionRate';

const initialState = {
  honeymoon: {
    title: 'Honeymoon Package',
    includes: [
      'Bottle of wine',
      'Fresh fruit',
      'One massage per person',
      'Floating Breakfast',
      'Flowers throughout the villa',
    ],
    isSelected: false,
    price: 1000000,
  },
  flowers_pool: {
    title: 'Pool full of flowers',
    includes: [],
    isSelected: false,
    price: 1000000,
  },
  flowers_bathtub: {
    title: 'Bathtub full of flowers',
    includes: [],
    isSelected: false,
    price: 200000,
  },
  floating_breakfast: {
    title: 'Floating breakfast',
    includes: [],
    isSelected: false,
    price: 200000,
  },
  five_course_meal: {
    title: 'Five course meal',
    includes: [],
    isSelected: false,
    price: 1000000,
  },
  motorbike: {
    title: 'Motorbike rental',
    indludes: [],
    isSelected: false,
    price: 90000,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PACKAGE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          isSelected: true,
        },
      };
    case REMOVE_PACKAGE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          isSelected: false,
        },
      };
    default:
      return state;
  }
}
