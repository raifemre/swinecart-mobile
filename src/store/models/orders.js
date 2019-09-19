import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { OrderService } from 'services';
import { orderMapper } from 'utils/mappers';

function orderObjectGetter(state, status) {
  return state.orders.ordersByStatus[status];
}

const LIMIT = 1;

export default {
  // State
  ordersById: {

  },
  ordersByStatus: {
    requested: {
      orders: null,
      page: 1,
      hasError: false,
      isLoadingMore: false,
      isRefreshing: false,
      isLoading: false,
    },

  },

  // Computed Values

  // Actions

  setOrders: action((state, payload) => {
    const { orders, status, page } = payload;
    state.ordersByStatus[status].orders = orders;
    state.ordersByStatus[status].page = page;
  }),
  
  setLoadingMoreByStatus: action((state, payload) => {
    const { isLoadingMore, status } = payload;
    state.ordersByStatus[status].isLoadingMore = isLoadingMore;
  }),

  setLoadingByStatus: action((state, payload) => {
    const { isLoading, status } = payload;
    state.ordersByStatus[status].isLoading = isLoading;
  }),

  setErrorByStatus: action((state, payload) => {
    const { hasError, status } = payload;
    state.ordersByStatus[status].hasError = hasError;
  }),

  // Side Effects
  getOrdersByStatus: thunk(async (actions, payload, { getStoreState }) => {
    
    const { status } = payload;
    const { page } = orderObjectGetter(getStoreState(), status);

    actions.setLoadingByStatus({ isLoading: true, status });

    const [error, data] = await to(OrderService.getOrders(status, 1, LIMIT));
    
    if (error) {

    }
    else {

      const transformedData = data.orders.map(orderMapper);

      actions.setOrders({
        orders: [...transformedData],
        status,
        page: page + 1
      })
    }

    actions.setLoadingByStatus({ isLoading: false, status });

  }),

  getMoreOrdersByStatus: thunk(async (actions, payload, { getStoreState }) => {
    
    const { status } = payload;
    const { orders, page } = orderObjectGetter(getStoreState(), status);

    actions.setLoadingMoreByStatus({ isLoadingMore: true, status });

    const [error, data] = await to(OrderService.getOrders(status, page, LIMIT));
    
    if (error) {
      actions.setErrorByStatus({ hasError: true, status });
    }
    else {

      const transformedData = data.orders.map(orderMapper);

      actions.setOrders({
        orders: [...(orders || []), ...transformedData],
        status,
        page: page + 1
      })
    }

    actions.setLoadingMoreByStatus({ isLoadingMore: false, status });

  }),

};