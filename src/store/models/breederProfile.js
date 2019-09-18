import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { BreederProfileService } from 'services';
import { breederProfileMapper } from 'utils/mappers';

export default {
  // State
  isLoading: false,
  hasError: false,
  data: null,

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload.isLoading;
  }),

  setData: action((state, payload) => {
    state.data = payload.data;
  }),

  setError: action((state, payload) => {
    state.hasError = payload.hasError;
  }),

  // Side Effects
  getData: thunk(async (actions, payload) => {

    actions.setError({ hasError: false });
    actions.setLoading({ isLoading: true });

    const [error, data] = await to(BreederProfileService.getProfile());

    if (error) {
      actions.setError({ hasError: true });
    }
    else {
      const { profile } = data.data;
      actions.setData({ data: breederProfileMapper(profile) });
    }

    actions.setLoading({ isLoading: false });

  }),

};