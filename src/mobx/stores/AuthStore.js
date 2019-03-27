import {
  observable, action, runInAction
} from 'mobx';

import {
  Auth, Navigation
} from '../../services';

import CommonStore from './CommonStore';
import UserStore from './UserStore';
import NotificationStore from './NotificationStore';
import MessageStore from './MessageStore';
import ProfileStore from './ProfileStore';

class AuthStore {

  @observable loadingLogin = false;
  @observable loadingLogout = false;

  @action async login(form) {
    const { error, data }  = await Auth.login(form);
    if (error) {
      throw new Error(error);
    }
    else {
      await this.loginFlow(data.access_token);
    }
  }

  @action async logout() {
    this.loadingLogout = true;
    await Auth.logout();
    await CommonStore.removeToken();
    runInAction(() => {
      UserStore.forgetUser();
      NotificationStore.clearNotifs();
      MessageStore.setSocket(null);
      this.loadingLogout = false;
      Navigation.navigate('Public');
    });
  }

  @action async loginFlow(token) {
    await CommonStore.setToken(token);
    await UserStore.getUser();
    await ProfileStore.getProfile();
    // initChat();
    // await initNotifications();
    Navigation.navigate(UserStore.userRole);
  }

}

export default new AuthStore();