import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { OrderService } from 'services';
import { requestMapper } from 'utils/mappers/requestMappers';

export default {
  // State
  isLoading: false,

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload.isLoading;
  }),

  // Side Effects
  reserveProduct: thunk(async (actions, payload) => {

    const { orderRequest } = payload;
    console.dir(requestMapper(orderRequest));

    // if (error) {
    // }
    // else {
    // }

  }),

};