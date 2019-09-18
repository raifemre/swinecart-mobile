import to from 'await-to-js';

import {
  AuthService, NavigationService
} from 'services';

export default {
  state: {
  },
  reducers: {

  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      const [ error, { data } ] = await to(AuthService.login(payload));
      
      if (error) {
        console.dir(error);
      }
      else {
        dispatch({ type: 'token/saveToken', payload: data.token });
        NavigationService.navigate('Breeder');
      }
    },
    async logout(payload, rootState) {
      console.log(rootState);
      // NavigationService.navigate('Public');
    }
  })
}