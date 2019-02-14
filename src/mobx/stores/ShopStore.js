import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Shop
} from '../../services';


class ShopStore {

  page = 1;
  perpage = 8;
  @observable products = [];


  @action async getProducts() {
    const { data: { error, data } } = await Shop.getProducts(1, this.perpage);
    if (error) {
      throw new Error(error);
    }
    else {
      const { count, products } = data;
      runInAction(() => {
        this.page = 1;
        this.products = products;
      });
    }
  }

  @action async getMoreProducts() {
    const { data: { error, data } } = await Shop.getProducts(this.page + 1, this.perpage);
    if (error) {
      throw new Error(error);
    }
    else {
      const { count, products } = data;
      runInAction(() => {
        this.products.push(...products);
        if (products.length > 0) this.page = this.page + 1;
      });
    }
  }

}

export default new ShopStore();