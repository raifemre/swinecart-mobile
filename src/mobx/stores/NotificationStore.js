import {
  observable, action, toJS, runInAction, autorun, computed
} from 'mobx';

import {
  Notifications
} from '../../services';

import UserStore from './UserStore'

class NotificationStore {

  @observable notifications = null;

  @observable page = 1;

  limit = 10

  @action async getNotifications() {
    const { data } = await Notifications.getNotifications(UserStore.userRole, 1, this.limit);
    const { count, notifications } = data;
    runInAction(() => {
      this.notifications = notifications;
    });
  }

  @action clear() {
    runInAction(() => {
      this.notifications = null;
    });
  }
}

export default new NotificationStore();