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
    page: 1
  }

  limit = 10

  @observable farms = [];
  @observable page = 1;

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
}

export default new FarmStore();