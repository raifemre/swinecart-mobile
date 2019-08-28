import { FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS } from '../types/requests';

const initialState = {
  entities: {},
  byId: [],
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUESTS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        byId: [ ...payload.requests ],
        isFetching: false,
      }
    default: 
      return state;
  }
}

