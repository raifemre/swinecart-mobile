import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  CustomerShop
} from '../../services';


class ShopStore {

  page = 1;
  limit = 8;
  @observable products = null;
  
  @observable product = null;
  @observable media = null;

  @action async getProducts() {
    const { error, data } = await CustomerShop.getProducts(1, this.limit);

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
    const { error, data } = await CustomerShop.getProducts(this.page + 1, this.limit);

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
    const { error, data }  = await CustomerShop.getProductDetails(id);
    if (error) {
      throw new Error(error);
    }
    else {
      const { product } = data;
      // console.dir(product);
      runInAction(() => {
        this.product = product;
      });
    }
  }

  @action async getProductMedia(id) {
    const { error, data } = await CustomerShop.getProductMedia(id);
    if (error) {
      throw new Error(error);
    }
    else {
      const { images } = data;
      runInAction(() => {
        this.media = images;
      });
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