import to from 'await-to-js';
import map from 'lodash/map';

import {
  FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS, SET_CURRENT_ID, FETCH_MORE_REQUESTS, FETCH_MORE_REQUESTS_SUCCESS
} from '../../types/requests';

import {
  OrderService
} from '../../../services';

import { requestMapper } from '../../../utils/mappers';

export function getOrderRequests(id, page, limit) {
  return async dispatch => {
    dispatch({ type: FETCH_REQUESTS });

    const [error, data] = await to(OrderService.getOrderRequests(id, page, limit));

    if (error) {
      console.dir(error);
    }
    else {
      const { requests } = data.data;
      dispatch({  
        type: FETCH_REQUESTS_SUCCESS, 
        payload: { 
          requests: map(requests, requestMapper),
          page: 2
        } 
      });
    }

  };
}

export function getMoreOrderRequests(id, page, limit) {
  return async dispatch => {
    dispatch({ type: FETCH_MORE_REQUESTS });

    const [error, data] = await to(OrderService.getOrderRequests(id, page, limit));

    if (error) {
      console.dir(error);
    }
    else {
      const { requests } = data.data;
      dispatch({
        type: FETCH_MORE_REQUESTS_SUCCESS,
        payload: {
          requests: map(requests, requestMapper),
          page: requests.length === 0 ? page : page + 1,
        }
      });
    }

  };
}

export function setCurrentId(id) {
  return dispatch => {
    dispatch({ type: SET_CURRENT_ID, payload: { id } });
  }
}