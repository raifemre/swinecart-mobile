import { FETCH_ORDERS } from '../actions';

const initialState = {
  'requested' : { },
  'reserved' : { },
  'onDelivery' : { },
  'sold' : { },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ORDERS:
      const { status, orders } = payload;
      return {
        ...state,
        [status]: orders
      };

    default: return state;
  }
}

