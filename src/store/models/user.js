import { action, thunkOn } from 'easy-peasy';
import last from 'lodash/last';
import to from 'await-to-js';

import { AuthService, NavigationService } from 'services';

export default {
  // State
  data: null,
  accountType: null,

  // Actions

  setUserData: action((state, payload) => {
    state.data = payload.data;
  }),

  setAccountType: action((state, payload) => {
    state.accountType = payload.accountType;
  }),

  // Thunk Listeners
  onUserLogin: thunkOn(
    (actions, storeActions) => storeActions.auth.saveTokenToStorage,
    async (actions, target) => {

      const [error, data] = await to(AuthService.getLoggedInUser());

      if (error) {

      }
      else {
        const { user } = data.data;
        const accountType = last(user.userable_type.split('\\'));

        actions.setUserData({ data: user });
        actions.setAccountType({ accountType });

        NavigationService.navigate(accountType);

      }

    },
  ),

};