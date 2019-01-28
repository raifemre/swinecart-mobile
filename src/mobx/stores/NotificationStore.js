import {
  observable, action, toJS, runInAction, autorun
} from 'mobx';

import {
  Notifications
} from '../../services';

import Notification from '../models/Notification';

class NotificationStore {
  @observable notifications = [];
  @observable unreadCount = 0;
  @action async getNotifs() {
    const { data: { data } } = await Notifications.getNotifs();
    const notifications = data.map(d => new Notification(d));
    runInAction(() => {
      this.notifications = notifications;
    });
  }

  @action async readNotification(id) {
    await Notifications.seeNotif(id);
    await this.getNotifs();
  }

  reactToNotifChange = autorun(() => {
    const unread = this.notifications.filter(n => !n.read_at);
    console.log(unread);
    runInAction(() => {
      this.unreadCount = unread.length;
    })
  });
}

export default new NotificationStore();