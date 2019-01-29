import {
  observable, action, toJS, runInAction, autorun, computed
} from 'mobx';

import {
  Notifications
} from '../../services';

import Notification from '../models/Notification';

class NotificationStore {
  @observable notifications = [];

  @action async getNotifs() {
    const { data: { data } } = await Notifications.getNotifs();
    const notifications = data.map(d => new Notification(d));
    runInAction(() => {
      this.notifications = notifications;
    });
  }

  @action async readNotification(id) {
    await Notifications.seeNotif(id);
  }

  @computed get unreadCount() {
    const unread = this.notifications.filter(n => !n.read_at);
    return unread.length;
  }
}

export default new NotificationStore();