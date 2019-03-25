import {
  observable, action, runInAction, get, set, has, autorun, remove
} from 'mobx';

import {
  BreederFarms
} from '../../services';

import Product from '../models/Product';

import { filterNewItems } from '../../utils';

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
    const { data } = await BreederFarms.getFarms(1, 1000);
    const { count, farms } = data;
    runInAction(() => {
      this.page = 1;
      this.farms = farms;
    });
  }

  @action async getFarm(id) {
    const { data } = await BreederFarms.getFarm(id);
    const { farm } = data;
    console.dir('Farm', farm);
    runInAction(() => {
      this.farm = farm;
    });

  }

}

export default new FarmStore();