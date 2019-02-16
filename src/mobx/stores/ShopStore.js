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

  @observable selectedProduct = null;

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

  @action setSelectedProduct(product) {
    runInAction(() => {
      this.selectedProduct = product;
    });
  }

  @action async viewProductDetails(id) {
    const { ratings, product } = await this.getProductDetails(id);
    this.setSelectedProduct(product);
  }

}

export default new ShopStore();