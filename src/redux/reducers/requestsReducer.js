import { 
  FETCH_REQUESTS,
  FETCH_REQUESTS_SUCCESS,
  SET_CURRENT_ID,
  FETCH_MORE_REQUESTS,
  FETCH_MORE_REQUESTS_SUCCESS,
} from '../types/requests';

const initialState = {
  currentId: null,
  entities: null,
  byIds: null,
  isLoading: false,
  isRefreshing: false,
  isLoadingMore: false,
  currentPage: 1,
  limit: 1,
};

const updateItems = (state, newValues) => {
  if (newValues.length === 0) return state.byIds;
  return [...state.byIds, ...newValues];
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_ID: {
      return {
        ...state,
        currentId: payload.id
      }
    }
    case FETCH_REQUESTS:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        currentPage: payload.page,
        isLoading: false,
        byIds: [...payload.requests],
      }
    case FETCH_MORE_REQUESTS:
      return {
        ...state,
        isLoadingMore: true,
      }
    case FETCH_MORE_REQUESTS_SUCCESS:
      return {
        ...state,
        currentPage: payload.page,
        byIds: updateItems(state, payload.requests),
        isLoadingMore: false,
      }
    default: 
      return state;
  }
}

