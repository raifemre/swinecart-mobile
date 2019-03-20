import {
  observable, action, runInAction, toJS
} from 'mobx';

import { intersectionBy } from 'lodash';

import { 
  BreederProducts, Navigation
} from '../../services';

import Product from '../models/Product';

class ProductsStore {

  defaultState = {
    products: [],
    page: 1
  }

  limit = 9

  @observable products = [];
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
      this.products = products;
    });
  }

  @action async getMoreProducts() {
    const { data } = await BreederProducts.getProducts(this.page + 1, this.limit);
    const { count, products } = data;
    runInAction(() => {
      if (count > 0) {
        this.incrementPage();
      }
      this.products = [...this.products, ...products];
    });
  }

  @action incrementPage() {
    runInAction(() => {
      this.page = this.page + 1;
    });
  }

}

export default new ProductsStore();