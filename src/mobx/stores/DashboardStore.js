import {
  observable, action, toJS, runInAction, computed
} from 'mobx';

import {
  BreederDashboard
} from '../../services';

import { formatError, filterNewItems } from '../../utils';


class DashboardStore {

  // Loaders

  @observable getStatsLoading = false;
  @observable getRatingsLoading = false;
  @observable getReviewsLoading = false;

  @observable stats = null;
  @observable ratings = null;
  @observable reviews = null;
  @observable reviewsMap = new Map();

  @observable page = 1;

  limit = 10

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

  @action async getReviews() {
    try {
      this.getReviewsLoading = true;
      const { data } = await BreederDashboard.getReviews(1, this.limit);
      const { reviews } = data;
      runInAction(() => {
        this.page = 1;
        this.reviewsMap = new Map();
        this.reviews = null;
        this.reviews = filterNewItems(this.reviewsMap, reviews);
      });
    }
    catch (err) {
      throw new Error(formatError(err));
    }
    finally {
      runInAction(() => {
        this.getReviewsLoading = false;
      })
    }
  }

  @action async getMoreReviews() {
    try {
      this.getReviewsLoading = true;
      const { data } = await BreederDashboard.getReviews(this.page + 1, this.limit);
      const { count, reviews } = data;
      console.dir(count, reviews);
      runInAction(() => {
        if (count >= this.limit) { this.page = this.page + 1; }
        const newItems = filterNewItems(this.reviewsMap, reviews);
        this.reviews.push(...newItems);
      });
    }
    catch (err) {
      throw new Error(formatError(err));
    }
    finally {
      runInAction(() => {
        this.getReviewsLoading = false;
      })
    }
  }

}

export default new DashboardStore();