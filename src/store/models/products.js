import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { ProductsService } from 'services';
import { productMapper } from 'utils/mappers/responseMappers';

const LIMIT = 10;

export default {
  requests: null,
  page: 1,
  hasError: false,
  isLoadingMore: false,
  isRefreshing: false,
  isLoading: false,

  // Computed Values

  // Actions

  setProducts: action((state, payload) => {
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
  getProducts: thunk(async (actions, payload) => {

    actions.setLoadingByStatus({ isLoading: true });

    const [error, data] = await to(ProductsService.getProducts(1, LIMIT));

    if (error) {

    }
    else {

      const { products } = data.data;
      const transformedData = products.map(productMapper);
      console.dir(products, transformedData);
      // actions.setProducts({
      //   requests: [...transformedData],
      //   page: 2
      // });

    }

    actions.setLoadingByStatus({ isLoading: false });

  }),

  // getMoreRequests: thunk(async (actions, payload, { getStoreState }) => {

  //   const { requests, page } = getStoreState().orderRequests;

  //   actions.setLoadingMoreByStatus({ isLoadingMore: true });

  //   const [error, data] = await to(OrderService.getOrderRequests(payload.id, page, LIMIT));

  //   if (error) {

  //   }
  //   else {

  //     if (data.data.requests && data.data.requests.length > 0) {
  //       const transformedData = data.data.requests.map(requestMapper);

  //       actions.setProducts({
  //         requests: [...(requests || []), ...transformedData],
  //         page: page + 1
  //       });
  //     }

  //   }

  //   actions.setLoadingMoreByStatus({ isLoadingMore: false });

  // }),
};