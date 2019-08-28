import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,

  FETCH_MORE_ORDERS,
  FETCH_MORE_ORDERS_SUCCESS,

  UPDATE_PAGE,

} from '../types/orders';

const statusInitialState = {
  entities: {},
  byIds: [],
  isLoading: false,
  isRefreshing: false,
  isLoadingMore: false,
  currentPage: 1,
  limit: 10,
};

const initialState = {
  'requested': Object.assign({}, statusInitialState),
  'reserved': Object.assign({}, statusInitialState),
  'onDelivery': Object.assign({}, statusInitialState),
  'sold': Object.assign({}, statusInitialState),
};

const updateStatusState = (state, status, newValues) => {
  const newStatusState = Object.assign({}, state[status], newValues);
  return newStatusState;
};

const updateStatusItems = (state, status, newValues) => {
  if (newValues.length === 0) return state[status].byIds;
  return [...state[status].byIds, ...newValues];
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ORDERS:
      return {
        ...state,
        [payload.status]: updateStatusState(state, payload.status, { 
          isLoading: true 
        })
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        [payload.status]: updateStatusState(state, payload.status, {
          currentPage: payload.page,
          isLoading: false,
          byIds: payload.orders
        })
      };
    case FETCH_MORE_ORDERS:
      return {
        ...state,
        [payload.status]: updateStatusState(state, payload.status, {
          isLoadingMore: true,
        })
      };
    case FETCH_MORE_ORDERS_SUCCESS:
      return {
        ...state,
        [payload.status]: updateStatusState(state, payload.status, {
          isLoadingMore: false,
          currentPage: payload.page,
          isLoading: false,
          byIds: updateStatusItems(state, payload.status, payload.orders)
        })
      };
    default: 
      return state;
  }
}

