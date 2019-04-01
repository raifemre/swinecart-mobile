import { observable, action, runInAction, toJS, remove } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { BreederInventory, Navigation } from '../../services';

import { filterNewItems } from '../../utils';

class InventoryStore {

  limit = 8

  @observable products = {}
  @observable pages = {}
  @observable maps = {}
  @observable requests = null;

  @observable reserveLoading = false;

  @action async reserveProduct(requestData) {
    try {
      this.reserveLoading = true;
      const { error, data, message } = await BreederInventory.reserveProduct(toJS(requestData));
      const { product } = data;
      this._addProduct('reserved', product);
      this._removeProduct('requested', product.id);
      showMessage({
        message: `Product is now reserved!`,
        type: 'success',
      });
      Navigation.back();
    }
    catch (err) {
      console.dir(err);
    }
    finally {
      runInAction(() => {
        this.reserveLoading = false;
      });
    }
  }

  @action findProduct(status, id) {
    return this.products[status].findIndex(p => p.id === id);
  }

  @action _removeProduct(status, id) {
    const index = this.findProduct(status, id);
    this.products[status].remove(this.products[status][index]);
    remove(this.maps[status], `${id}`);
  }

  @action _addProduct(status, product) {
    runInAction(() => {
      const newItems = filterNewItems(this.maps[status], [product]);
      this.products[status].push(...newItems);
    })
  }


  @action async getProducts(status) {
    const { data } = await BreederInventory.getProducts(status, 1, this.limit);
    const { count, products } = data;
    runInAction(() => {
      this.pages[status] = 1;
      this.products[status] = [];
      this.maps[status] = new Map();

      if (count >= this.limit) {
        this.pages[status] = this.pages[status] + 1;
      }

      this.products[status] = filterNewItems(this.maps[status], products);
    });
  }

  @action async getMoreProducts(status) {
    const { data } = await BreederInventory.getProducts(status, this.pages[status], this.limit);
    const { count, products } = data;
    runInAction(() => {
      if (count >= this.limit) {
        this.pages[status] = this.pages[status] + 1;
      }
      this.products[status].push(...filterNewItems(this.maps[status], products));
    });
  }

  @action async getRequests(id) {
    const { data } = await BreederInventory.getProductRequests(id, 1, 1000);
    const { count, requests } = data;
    runInAction(() => {
      this.requests = requests;
    });
  }
  
  @action async clearRequests() {
    runInAction(() => {
      this.requests = null;
    });
  }
}

export default new InventoryStore();