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
  onSavetoStorage: thunkOn(
    (actions, storeActions) => storeActions.auth.saveTokenToStorage,
    async (actions, target) => {

      if (target.payload.token) {
        const [error, data] = await to(AuthService.getLoggedInUser());

        if (error) {
          NavigationService.navigate('Public');
        }
        else {
          const { user } = data.data;
          const accountType = last(user.userable_type.split('\\'));

          actions.setUserData({ data: user });
          actions.setAccountType({ accountType });
          NavigationService.navigate(accountType);

        }
      }
      else {
        NavigationService.navigate('Public');
      }

    },
  ),

};