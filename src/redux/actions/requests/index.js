
import to from 'await-to-js';

import {
  FETCH_REQUESTS, FETCH_REQUESTS_SUCCESS
} from '../../types/requests';

import {
  OrderService, NavigationService
} from '../../../services';
import { requestMapper } from '../../../utils/mappers';

export function getOrderRequests(id) {
  return async dispatch => {
    dispatch({ type: FETCH_REQUESTS });

    const [error, data] = await to(OrderService.getOrderRequests(id));

    if (error) {

    }
    else {
      const { requests } = data.data;
      dispatch({ 
        type: FETCH_REQUESTS_SUCCESS, 
        payload: { 
          requests: requestMapper(requests)
        } 
      });
    }

  };
}