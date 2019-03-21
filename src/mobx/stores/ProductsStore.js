import {
  observable, action, runInAction, get, set, has, autorun, remove
} from 'mobx';

import { 
  BreederProducts, Navigation
} from '../../services';

import Product from '../models/Product';

import { filterNewItems } from '../../utils';
import Picker from '../../../native-base-theme/components/Picker';

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

  @action findProduct(id) {
    return this.products.findIndex(p => p.id === id);
  }

  @action toggleStatus(id) {
    const index = this.findProduct(id);
    const status = this.products[index].status;
    this.products[index].status = status === 'displayed' ? 'hidden' : 'displayed';
    set(this.productsMap, `${id}`, this.products[index]);
  }

  @action deleteProduct(id) {
    const index = this.findProduct(id);
    const product = this.products[index];
    this.products.remove(product);
  }
}

export default new ProductsStore();