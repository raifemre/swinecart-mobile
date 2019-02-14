import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Shop
} from '../../services';


class ShopStore {

  @observable products = [];

  @action async getProducts() {
    const { data: { error, data } } = await Shop.getProducts(1, 10);
    if(error) {
      throw new Error(error);
    }
    else {
      const { count, products } = data;
      runInAction(() => {
        this.products = products;
      });
    }
  }

}

export default new ShopStore();