
import { orderMapper } from '../../utils/mappers';

import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  CHANGE_STATUS
} from '../types/orders'

const statuses = [
  { key: 'requested', text: 'Requested' },
  { key: 'reserved', text: 'Reserved' },
  { key: 'onDelivery', text: 'On Delivery' },
  { key: 'sold', text: 'Sold' },
];

const initialState = {
  currentStatus: statuses[0],
  'requested' : null,
  'reserved' : null,
  'onDelivery' : null,
  'sold' : null,
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATUS:
      return {
        ...state,
        currentStatus: payload.status
      };
    case FETCH_ORDERS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ORDERS_SUCCESS:
      const { status, orders } = payload;
      return {
        ...state,
        isFetching: false,
        [status]: orders.map(orderMapper)
      };
    default: 
      return state;
  }
}

