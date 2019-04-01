import {
  observable, action, runInAction, get, set, has, autorun, remove
} from 'mobx';

import {
  BreederInventory
} from '../../services';


class InventoryStore {

  defaultState = {
    products: [],
    farm: null
  }

  limit = 10

  @observable requestedProducts = [];
  @observable requestedPage = 1;

  @action async getReservedProducts() {
    const { data } = await BreederInventory.getProducts('requested', this.reservedPage, this.limit);
    const { count, products } = data;
    runInAction(() => {
      this.requestedProducts = products;
    });
  }

}

export default new InventoryStore();