import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { OrderService } from 'services';
import { requestMapper } from 'utils/mappers/responseMappers';

const LIMIT = 10;

export default {
  currentId: null,
  requests: null,
  page: 1,
  hasError: false,
  isLoadingMore: false,
  isRefreshing: false,
  isLoading: false,

  // Computed Values

  // Actions

  setRequests: action((state, payload) => {
    const { requests, page } = payload;
    state.requests = requests;
    state.page = page;
  }),

  setCurrentId: action((state, payload) => {
    state.currentId = payload.currentId;
  }),

  setLoadingMoreByStatus: action((state, payload) => {
    const { isLoadingMore } = payload;
    state.isLoadingMore = isLoadingMore;
  }),

  setLoadingByStatus: action((state, payload) => {
    const { isLoading } = payload;
    state.isLoading = isLoading;
  }),

  setErrorByStatus: action((state, payload) => {
    const { hasError } = payload;
    state.hasError = hasError;
  }),

  // Side Effects
  getRequests: thunk(async (actions, payload) => {

    actions.setLoadingByStatus({ isLoading: true });

    const [error, data] = await to(OrderService.getOrderRequests(payload.id, 1, LIMIT));
    
    if (error) {

    }
    else {
      const { requests } = data.data;

      const transformedData = requests.map(requestMapper);

      actions.setRequests({
        requests: [...transformedData],
        page: 2
      });

    }

    actions.setLoadingByStatus({ isLoading: false });

  }),

  getMoreRequests: thunk(async (actions, payload, { getStoreState }) => {

    const { requests, page } = getStoreState().orderRequests;
    
    actions.setLoadingMoreByStatus({ isLoadingMore: true });

    const [error, data] = await to(OrderService.getOrderRequests(payload.id, page, LIMIT));
    
    if (error) {

    }
    else {

      if (data.data.requests && data.data.requests.length > 0) {
        const transformedData = data.data.requests.map(requestMapper);

        actions.setRequests({
          requests: [...(requests || []), ...transformedData],
          page: page + 1
        });
      }

    }

    actions.setLoadingMoreByStatus({ isLoadingMore: false });

  }),
};