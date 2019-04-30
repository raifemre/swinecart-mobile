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

  limit = 10;

  @action _findNotification(id) {
    return this.notifications.findIndex(notification => notification.id === id);
  }

  @action async getNotifications() {
    const { data } = await Notifications.getNotifications(UserStore.userRole, 1, this.limit);
    const { count, notifications } = data;
    runInAction(() => {
      this.notifications = notifications;
    });
  }

  @action async seeNotification(id) {
    const { data } = await Notifications.seeNotif(UserStore.userRole, id);
    const { read_at } = data;
    const index = this._findNotification(id);
    runInAction(() => {
      this.notifications[index].read_at = read_at;
    });
  }

  @action clear() {
    runInAction(() => {
      this.notifications = null;
    });
  }
}

export default new NotificationStore();