import { LOAD_VILLAS } from '../actions/types';

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
    default:
      return state;
  }
}
