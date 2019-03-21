import {
  observable, action, runInAction, get, set, has, autorun
} from 'mobx';

import { 
  BreederProducts, Navigation
} from '../../services';

import Product from '../models/Product';

import { filterNewItems } from '../../utils';

class ProductsStore {

  defaultState = {
    products: [],
    page: 1
  }

  limit = 8

  @observable products = [];
  @observable productsMap = new Map();
  @observable page = 1;

  @action resetData(prop) {
    this[prop] = this.defaultState[prop];
  }

  @action resetAll() {
    this.products = [];
    this.page = 1;
  }

  @action async getProducts() {
    const { data } = await BreederProducts.getProducts(1, this.limit);
    const { products } = data;
    runInAction(() => {
      this.page = 1;
      this.productsMap = new Map();
      this.products = filterNewItems(this.productsMap, products);
    });
  }

  @action async getMoreProducts() {
    const { data } = await BreederProducts.getProducts(this.page + 1, this.limit);
    const { count, products } = data;
    runInAction(() => {
      if(count >= this.limit) { this.page = this.page + 1; }
      const newItems = filterNewItems(this.productsMap, products);
      this.products.push(...newItems);
    });
  }

}

export default new ProductsStore();