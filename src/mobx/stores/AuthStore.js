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

import { formatError } from '../../utils';

import initNotifications from '../../core/initNotifications';
import initChat from '../../core/initChat';

class AuthStore {
  @observable loadingLogout = false;

  @action async login(form) {
    const { error, data, message }  = await Auth.login(form);
    return {
      error: formatError(error),
      data,
      message
    };
  }

  @action async logout() {
    this.loadingLogout = true;
    await Auth.logout();
    await CommonStore.removeToken();
    runInAction(() => {
      UserStore.forgetUser();
      NotificationStore.clear();
      MessageStore.setSocket(null);
      this.loadingLogout = false;
      Navigation.navigate('Public');
    });
  }

  @action async loginFlow(token) {
    await CommonStore.setToken(token);
    await UserStore.getUser();
    await ProfileStore.getProfile();
    initChat();
    // await initNotifications();
    Navigation.navigate(UserStore.userRole);
  }

}

export default new AuthStore();