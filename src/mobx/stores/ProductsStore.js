import {
  observable, action, runInAction, get, set, has, autorun, remove, toJS
} from 'mobx';

import { 
  BreederProducts, Navigation
} from '../../services';

import Product from '../models/Product';

import { filterNewItems, toAddProdRequest } from '../../utils';

class ProductsStore {

  defaultState = {
    products: null,
    page: 1
  }

  limit = 10

  @observable products = null;
  @observable productsMap = new Map();
  @observable page = 1;

  @action resetData(prop) {
    this[prop] = this.defaultState[prop];
  }

  @action resetAll() {
    this.products = null;
    this.page = 1;
  }

  @action async getProducts() {
    const { data } = await BreederProducts.getProducts(1, this.limit);
    const { products } = data;
    runInAction(() => {
      this.page = 1;
      this.productsMap = new Map();
      this.products = null;
      this.products = filterNewItems(this.productsMap, products, Product);
    });
  }

  @action async getMoreProducts() {
    const { data } = await BreederProducts.getProducts(this.page + 1, this.limit);
    const { count, products } = data;
    runInAction(() => {
      if(count >= this.limit) { this.page = this.page + 1; }
      const newItems = filterNewItems(this.productsMap, products, Product);
      this.products.push(...newItems);
    });
  }

  @action findProduct(id) {
    return this.products.findIndex(p => p.id === id);
  }

  @action async toggleStatus(id) {
    const { error, message, data } = await BreederProducts.toggleStatus([id]);
    const { status } = data;
    runInAction(() => {
      const index = this.findProduct(id);
      this.products[index].status = status;
      // this.products[index] = this.products[index];
    });
    // this.products.push({});
    // set(this.productsMap, `${id}`, product);
  }

  @action async deleteProduct(id) {
    const { error, message } = await BreederProducts.deleteProduct([id]);
    runInAction(() => {
      const index = this.findProduct(id);
      this.products.remove(this.products[index]);
    });
  }

  @action async addProduct(newProduct) {
    const requestData = toAddProdRequest(newProduct);
    const { error, message, data } = await BreederProducts.addProduct(requestData);
    
    if (error) {

    }
    else {
      if (data) {
        const { product } = data;
        this.products.unshift(product);
      }
    }

  }

}

export default new ProductsStore();