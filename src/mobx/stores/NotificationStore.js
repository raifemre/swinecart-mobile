import {
  observable, action, toJS, runInAction, computed
} from 'mobx';

import {
  Notifications
} from '../../services';

class NotificationStore {

  @observable notifs = [];

  @action async getNotifs() {
    const { data: { data: notifs } } = await Notifications.getNotifs();
    runInAction(() => {
      this.notifs = notifs;
    });
  }

  @action async seeNotifs() {
    const id = this.unreadNotifs.map(n => Notifications.seeNotif(n.id));
    await Promise.all(id);
    await this.getNotifs();
  }

  @computed get unreadNotifs() {
    const unread = this.notifs.filter(n => !n.read_at);
    return unread;
  }

  @computed get unreadCount() {
    return this.unreadNotifs.length;
  }


}

export default new NotificationStore();