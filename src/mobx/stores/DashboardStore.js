import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Dashboard
} from '../../services';


class DashboardStore {

  @observable stats = {};

  @observable hidden = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable displayed = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable requested = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable reserved = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable on_delivery = { boar: 0, sow: 0, gilt: 0, semen: 0 };

  @observable ratings = {};

  @action async getStats() {
    const { data: { data } } = await Dashboard.getStats();
    runInAction(() => {
      this.stats = data;
      const { hidden, displayed, requested, reserved, on_delivery, ratings } = data;
      this.hidden = hidden;
      this.displayed = displayed;
      this.requested = requested;
      this.reserved = reserved;
      this.on_delivery = on_delivery;
      this.ratings = ratings;
    });
  }

}

export default new DashboardStore();