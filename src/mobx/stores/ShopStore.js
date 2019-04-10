import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Shop
} from '../../services';


class ShopStore {

  page = 1;
  limit = 8;
  @observable products = null;

  @observable selectedProduct = null;

  @action async getProducts() {
    const { error, data } = await Shop.getProducts(1, this.limit);

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
    const { error, data } = await Shop.getProducts(this.page + 1, this.limit);

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

  @action async getProductDetails(id) {
    const { data: { error, data } } = await Shop.getProductDetails(id);
    if (error) {
      throw new Error(error);
    }
    else {
      const { ratings, product } = data;
      return { ratings, product };
    }
  }

  @action async filterProducts(types, breeds) {
    const products = this.products.filter(({ type, breed }) => {
      return types.find(t => t === type) || breeds.find(b => b === breed);
    });
    runInAction(() => {
      this.products = products;
    })
  }

}

export default new ShopStore();