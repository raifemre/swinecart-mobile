export const FETCH_ORDERS = 'orders:fetchOrders';

import { createRandomOrders } from '../../utils/mockdata';
import { normalize } from '../../utils/helpers';

export const fetchOrders = (status) => {
  return (dispatch) => {
    const fakeOrders = createRandomOrders(20, status);
    return dispatch({
      type: FETCH_ORDERS,
      payload: {
        status,
        orders: normalize(fakeOrders)
      }
    });
  }
};