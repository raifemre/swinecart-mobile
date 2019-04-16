import {
  observable, action, runInAction, remove, toJS
} from 'mobx';

import { showMessage } from 'react-native-flash-message';

import { 
  BreederProducts
} from '../../services';


import { filterNewItems, formatError } from '../../utils';

class ProductsStore {

  defaultState = {
    products: null,
    page: 1
  }

  limit = 10

  @observable products = null;
  @observable productsMap = new Map();
  @observable page = 1;
  @observable loading = null;
  @observable product = null

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

  @action async getProductDetails(id) {
    const { data } = await BreederProducts.getProductDetails(id);
    const { product } = data;
    return product;
  }

  @action async selectProduct(product) {
    runInAction(() => {
      this.product = product;
    });
  }

  @action findProduct(id) {
    return this.products.findIndex(p => p.id === id);
  }

  @action _addProduct(product) {
    runInAction(() => {
      remove(this.productsMap, `${product.id}`);
      const newItems = filterNewItems(this.productsMap, [ product ], 'id');
      this.products.unshift(...newItems);
    })
  }
  
  @action _removeProduct(id) {
    const index = this.findProduct(id);
    this.products.remove(this.products[index]);
    remove(this.productsMap, `${id}`);
  }

  @action replaceProduct(product) {
    const index = this.findProduct(product.id);
  }

  @action async toggleStatus(id) {
    try {
      this.loading = true;
      const { error, data } = await BreederProducts.toggleStatus([id]);
      const { status } = data;

      if (error) {
        throw new Error(error);
      }
      else {
        runInAction(() => {
          const index = this.findProduct(id);
          this.products[index].status = status;
          showMessage({
            message: `Product is now ${status}!`,
            type: 'success',
          });
        });
      }

    }
    catch (err) {

    }
    finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  @action async deleteProduct(id) {
    try {
      this.loading = true;
      const { error } = await BreederProducts.deleteProduct([id]);
      if (error) {
        throw new Error(formatError(error));
      }
      else {
        runInAction(() => {
          this._removeProduct(id);
          showMessage({
            message: 'Deleted Product!',
            type: 'success',
          });
        });
      }
    }
    catch (err) {
      
    }
    finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  @action async addProduct(formData) {
    const { error, message, data } = await BreederProducts.addProduct(toJS(formData));
    return {
      error: formatError(error),
      data,
      message
    }
  }

}

export default new ProductsStore();