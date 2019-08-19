import { FETCH_REQUESTED_ORDERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUESTED_ORDERS: 
    return [
      ...state,
      ...payload
    ];

    default: return state;
  }
}

