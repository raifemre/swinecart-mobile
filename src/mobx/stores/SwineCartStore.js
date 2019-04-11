import {
  observable, action, toJS, runInAction, get, remove,
} from 'mobx';

import { showMessage } from 'react-native-flash-message';

import {
  SwineCart
} from '../../services';
import { formatError, filterNewItems } from '../../utils';


class SwineCartStore {

  page = 1;
  limit = 8;

  @observable items = {};
  @observable pages = {};
  @observable maps = {};

  @observable loadingAdd = false;
  @observable loadingRemove = false;

  @observable selectedIndex = 1;

  @action async getItems(status) {
    try {
      const { error, data } = await SwineCart.getItems(status, 1, this.limit);
      if (error) {

      }
      else {
        if (data) {
          const { count, items } = data;
          runInAction(() => {
            this.pages[status] = 1;
            this.items[status] = [];
            this.maps[status] = new Map();
            if (count >= this.limit) {
              this.pages[status] = this.pages[status] + 1;
            }
            this.items[status] = filterNewItems(this.maps[status], items, 'id');
          });
        }
      }
    }
    catch (err) {
      console.dir(err.message);
    }

  }

  @action async getMoreItems() {
  }

  // Utility Functions

  @action findItem(status, id) {
    return this.items[status].findIndex(i => i.id === id);
  }

  @action _removeProduct(status, id) {
    const index = this.findItem(status, id);
    this.items[status].remove(this.items[status][index]);
    remove(this.maps[status], `${id}`);
  }

  @action _addProduct(status, item) {
    runInAction(() => {
      const newItems = filterNewItems(this.maps[status], [ item ], 'id');
      this.items[status].push(...newItems);
    })
  }


  @action async addItem(status, id) {
    try {
      this.loadingAdd = true;
      const { error, data, message } = await SwineCart.addItem(id);
      if (error) {
        throw new Error(formatError(error).errorMessage);
      }
      else {
        if (data) {
          const { item } = data;
          this._addProduct(status, item);
        }
        showMessage({
          message: message,
          type: 'success',
        });
      }
    }
    catch (err) {
      showMessage({
        message: err.message,
        type: 'danger',
      });
    }
    finally {
      runInAction(() => {
        this.loadingAdd = false;
      })
    }
  }

  @action async removeItem(status, item) {
    try {
      this.loadingRemove = true;
      const { error, data, message } = await SwineCart.removeItem(item.id);
      // console.dir(error, data, message);
      if (error) {
        throw new Error(formatError(error).errorMessage);
      }
      else {
        this._removeProduct(status, item.id);
        showMessage({
          message: 'Remove Item successful!',
          type: 'success',
        });
      }
    }
    catch (err) {
      showMessage({
        message: err.message,
        type: 'danger',
      });
    }
    finally {
      runInAction(() => {
        this.loadingRemove = false;
      });
    }
  }

  @action async requestItem(id, request) {

  }

}

export default new SwineCartStore();