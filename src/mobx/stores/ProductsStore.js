import {
  observable, action, runInAction, get, set, has, autorun, remove
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

  limit = 10

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
      this.products = [];
      this.products = filterNewItems(this.productsMap, products, Product);
    });
  }

  @action async getMoreProducts() {
    const { data } = await BreederProducts.getProducts(this.page + 1, this.limit);
    const { count, products } = data;
    // runInAction(() => {
    //   if(count >= this.limit) { this.page = this.page + 1; }
    //   const newItems = filterNewItems(this.productsMap, products);
    //   this.products.push(...newItems);
    // });
  }

  @action findProduct(id) {
    return this.products.find(p => p.id === id);
  }

  @action toggleStatus(id) {
    runInAction(() => {
      const product = this.findProduct(id);
      product.toggleStatus();
    });
    // this.products.push({});
    // set(this.productsMap, `${id}`, product);
  }

  @action deleteProduct(id) {
    const product = this.findProduct(id);
    this.products.remove(product);
  }
}

export default new ProductsStore();