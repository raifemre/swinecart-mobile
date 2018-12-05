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

  @observable overall = 0;
  @observable delivery = 0;
  @observable transaction = 0;
  @observable productQuality = 0;
  @observable reviewsSize = 0;


  @action async getStats() {
    const { data: { data } } = await Dashboard.getStats();
    runInAction(() => {
      this.stats = data;
      const { hidden, displayed, requested, reserved, on_delivery, ratings } = data;
      const { overall, delivery, transaction, productQuality, reviewsSize } = ratings;
      this.hidden = hidden;
      this.displayed = displayed;
      this.requested = requested;
      this.reserved = reserved;
      this.on_delivery = on_delivery;
      this.ratings = ratings;
      this.overall = overall;
      this.delivery = delivery;
      this.transaction = transaction;
      this.productQuality = productQuality;
      this.reviewsSize = reviewsSize;

    });
  }

}

export default new DashboardStore();