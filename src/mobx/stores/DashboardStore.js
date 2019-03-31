import {
  observable, action, toJS, runInAction, computed
} from 'mobx';

import {
  BreederDashboard
} from '../../services';

import { formatError } from '../../utils';


class DashboardStore {

  // Loaders

  @observable getStatsLoading = false;

  @observable stats = null;

  @action async getStats() {
    try {
      this.getStatsLoading = true;
      const { data } = await BreederDashboard.getStats();
      const { stats } = data;
      runInAction(() => {
        this.stats = stats;
      });
    }
    catch (err) {
      throw new Error(formatError(err));
    }
    finally {
      runInAction(() => {
        this.getStatsLoading = false;
      })
    }
  }

}

export default new DashboardStore();