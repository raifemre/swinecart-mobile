import {
  observable, action, toJS
} from 'mobx';

import {
  Auth, Navigation
} from '../../services';

import CommonStore from './CommonStore';
import UserStore from './UserStore';

class AuthStore {

  @observable loading = false;

  @observable values = {
    email: 'kimberly09@tillman.net',
    password: 'secret12'
  };

  @action setEmail(email) {
    this.values.email = email;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action resetValues() {
    this.values.email = '';
    this.values.password = '';
  }

  @action async login() {
    this.loading = true;
    try {
      const { data: { data: { access_token : token } } } = await Auth.login(this.values)
      await CommonStore.setToken(token);
      await UserStore.getUser();
      await UserStore.getProfile();
      Navigation.navigate(UserStore.userRole);
    }
    catch(e) {
      const { data } = e;
      if(data) {
        console.log(data.error);
      }
      else {
        console.log(e);
      }
    }
  }

  @action async logout() {
    await Auth.logout();
    CommonStore.setToken(null);
    UserStore.forgetUser();
    Navigation.navigate('AuthChecker');
  }

}

export default new AuthStore();