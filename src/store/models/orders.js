import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { OrderService } from 'services';
import { orderMapper } from 'utils/mappers/responseMappers';

function orderObjectGetter(state, status) {
  return state.orders.ordersByStatus[status];
}

const LIMIT = 10;

const prevStatus = {
  'reserved': 'requested',
  'onDelivery': 'reserved',
  'sold': 'onDelivery',
};

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
    reserved: {
      orders: null,
      page: 1,
      hasError: false,
      isLoadingMore: false,
      isRefreshing: false,
      isLoading: false,
    },
    onDelivery: {
      orders: null,
      page: 1,
      hasError: false,
      isLoadingMore: false,
      isRefreshing: false,
      isLoading: false,
    },
    sold: {
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

  updateStatus: action((state, payload) => {
    const { status, product, reservation } = orderMapper(payload.product);
    if (state.ordersByStatus[prevStatus[status]].orders) {
      state.ordersByStatus[prevStatus[status]].orders = state.ordersByStatus[prevStatus[status]].orders.filter(p => {
        if (prevStatus[status] === 'requested') {
          return p.product.id !== product.id;
        }
        else {
          return p.reservation.id !== reservation.id;
        }
      });
    }

    state.ordersByStatus[status].orders = state.ordersByStatus[status].orders || [];
    state.ordersByStatus[status].orders.push({ status, product, reservation });
  }),

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
  getOrdersByStatus: thunk(async (actions, payload) => {
    
    const { status } = payload;

    actions.setLoadingByStatus({ isLoading: true, status });

    const [error, data] = await to(OrderService.getOrders(status, 1, LIMIT));
    
    if (error) {

    }
    else {
      const transformedData = data.orders.map(orderMapper);
      actions.setOrders({
        orders: [...transformedData],
        status,
        page: 2
      });
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
      
      if (data.orders && data.orders.length > 0) {
        const transformedData = data.orders.map(orderMapper);
        actions.setOrders({
          orders: [...(orders || []), ...transformedData],
          status,
          page: page + 1
        })
      }
    }

    actions.setLoadingMoreByStatus({ isLoadingMore: false, status });

  }),

};