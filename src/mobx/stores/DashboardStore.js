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
  @observable getRatingsLoading = false;

  @observable stats = null;
  @observable ratings = null;

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

  @action async getRatings() {
    try {
      this.getRatingsLoading = true;
      const { data } = await BreederDashboard.getRatings();
      const { ratings } = data;
      console.dir(ratings);
      runInAction(() => {
        this.ratings = ratings;
      });
    } 
    catch (err) {
      throw new Error(formatError(err));
    }
    finally {
      runInAction(() => {
        this.getRatingsLoading = false;
      })
    }
  }

}

export default new DashboardStore();