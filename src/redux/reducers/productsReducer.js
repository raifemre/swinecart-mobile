import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS
} from '../types/products'

const initialState = {
  byIds: [],
  // entities: {},
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        byIds: [...payload.products],
        isLoading: false
      };
    default:
      return state;
  }
}

