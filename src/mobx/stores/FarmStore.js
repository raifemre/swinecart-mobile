import {
  observable, action, runInAction
} from 'mobx';

import {
  BreederFarms, CustomerFarms
} from '../../services';

import UserStore from './UserStore';

class FarmStore {

  defaultState = {
    products: [],
    farm: null
  }

  limit = 10

  @observable farms = [];
  @observable page = 1;

  @observable farm = null;

  @action resetData(prop) {
    this[prop] = this.defaultState[prop];
  }

  @action resetAll() {
    this.products = [];
    this.page = 1;
  }

  @action async getFarms() {
    if (UserStore.userRole === 'Breeder') {
      const { data } = await BreederFarms.getFarms(1, 1000);
      const { count, farms } = data;
      runInAction(() => {
        this.page = 1;
        this.farms = farms;
      });
    }
    else {
      const { data } = await CustomerFarms.getFarms(1, 1000);
      const { count, farms } = data;
      runInAction(() => {
        this.page = 1;
        this.farms = farms;
      });
    }
  }

  @action async getFarm(id) {
    const { data } = await BreederFarms.getFarm(id);
    const { farm } = data;
    runInAction(() => {
      this.farm = farm;
    });

  }

}

export default new FarmStore();