import {
  observable, action, toJS, runInAction, autorun, computed
} from 'mobx';

import {
  BreederNotifications
} from '../../services';


class NotificationStore {

  @observable notifications = null;

  @observable page = 1;

  limit = 10

  @action async getNotifications() {
    const { data } = await BreederNotifications.getNotifications(1, this.limit);
    const { count, notifications } = data;
    // console.dir(count, notifications);
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