import to from 'await-to-js';

import {
  FETCH_ORDERS, FETCH_ORDERS_SUCCESS, CHANGE_STATUS
} from '../../types/orders';

import {
  OrderService
} from '../../../services';

import { orderMapper } from '../../../utils/mappers';

export const fetchOrders = (status) => {
  return async dispatch => {

    dispatch({ type: FETCH_ORDERS });
  
    const [error, data] = await to(OrderService.getOrders(status));

    if (error) {
      console.dir(error);
    }
    else {
      const { orders } = data;
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: { status, orders } });
    }

  }
};

export const changeStatus = (status) => {
  return dispatch => {
    dispatch({ type: CHANGE_STATUS, payload: { status } });
  };
}