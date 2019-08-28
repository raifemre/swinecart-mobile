import to from 'await-to-js';
import map from 'lodash/map';

import {
  FETCH_ORDERS, 
  FETCH_ORDERS_SUCCESS, 
  
  FETCH_MORE_ORDERS,
  FETCH_MORE_ORDERS_SUCCESS,
} from '../../types/orders';

import {
  OrderService
} from '../../../services';

import { orderMapper } from '../../../utils/mappers';

export const fetchOrders = (status, page, limit) => {
  return async dispatch => {

    dispatch({ type: FETCH_ORDERS, payload: { status } });
  
    const [error, data] = await to(OrderService.getOrders(status, page, limit));

    if (error) {
      console.dir(error);
    }
    else {
      const { orders } = data;
      dispatch({ 
        type: FETCH_ORDERS_SUCCESS, payload: { 
          status, 
          orders: map(orders, orderMapper),
          page: 2
        } 
      });
    }

  }
};

export const fetchMoreOrders = (status, page, limit) => {
  return async dispatch => {
    dispatch({ type: FETCH_MORE_ORDERS, payload: { status } });

    const [error, data] = await to(OrderService.getOrders(status, page, limit));

    if (error) {
      console.dir(error);
    }
    else {
      const { orders } = data;
      dispatch({
        type: FETCH_MORE_ORDERS_SUCCESS, payload: {
          status,
          orders: map(orders, orderMapper),
          page: orders.length === 0 ? page : page + 1
        }
      });
    }

  }
}