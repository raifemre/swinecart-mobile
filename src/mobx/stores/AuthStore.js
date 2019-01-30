import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Auth, Navigation
} from '../../services';

import CommonStore from './CommonStore';
import UserStore from './UserStore';
import NotificationStore from './NotificationStore';
import MessageStore from './MessageStore';

import { sleep } from '../../utils';

class AuthStore {

  @observable loadingLogin = false;
  @observable loadingLogout = false;

  @action async login(data) {
    await sleep(300);
    const { 
      data: { data: { access_token: token } } 
    } = await Auth.login(data);

    return token;
  }

  @action async logout() {
    this.loadingLogout = true;
    await sleep(300);
    await Auth.logout();
    CommonStore.setToken(null);
    UserStore.forgetUser();
    runInAction(() => {
      this.loadingLogout = false;
      NotificationStore.clearNotifs();
      MessageStore.setSocket(null);
      Navigation.navigate('Public');
    });
  }

}

export default new AuthStore();