import {
  observable, action, toJS, runInAction, get, remove,
} from 'mobx';

import { showMessage } from 'react-native-flash-message';

import {
  CustomerSwineCart
} from '../../services';
import { formatError, filterNewItems } from '../../utils';


class SwineCartStore {

  page = 1;
  limit = 8;

  @observable items = {};
  @observable pages = {};
  @observable maps = {};
  @observable itemCount = 0;

  @observable loadingAdd = false;
  @observable loadingRemove = false;
  @observable loadingRequest = false;

  @observable selectedIndex = 0;

  @action onSelectIndex(index) {
    runInAction(() => {
      this.selectedIndex = index;
    });
  }

  @action async getItemCount() {
    try {
      const { error, data } = await CustomerSwineCart.getItemCount();
      if (error) {

      }
      else {
        if (data) {
          const { itemCount } = data;
          runInAction(() => {
            this.itemCount = itemCount;
          });
        }
      }
    }
    catch (err) {
      // console.dir(err.message);
    }
  }

  @action async getItems(status) {
    try {
      const { error, data } = await CustomerSwineCart.getItems(status, 1, this.limit);
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
      // console.dir(err.message);
    }

  }

  @action async getMoreItems(status) {
    try {
      const { error, data } = await CustomerSwineCart.getItems(status, this.pages[status], this.limit);
      if (error) {

      }
      else {
        if (data) {
          const { count, items } = data;
          runInAction(() => {
            if (count >= this.limit) {
              this.pages[status] = this.pages[status] + 1;
            }
            this.items[status].push(...filterNewItems(this.maps[status], items, 'id'));
          });
        }
      }
    }
    catch (err) {
      // console.dir(err.message);
    }

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
      const { error, data, message } = await CustomerSwineCart.addItem(id);
      if (error) {
        throw new Error(formatError(error).errorMessage);
      }
      else {
        if (data) {
          const { item } = data;
          this._addProduct(status, item);
          await this.getItemCount();
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
      const { error, data, message } = await CustomerSwineCart.removeItem(item.id);

      // console.dir(error, data, message);
      if (error) {
        throw new Error(formatError(error).errorMessage);
      }
      else {
        await this.getItemCount();
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

  @action async requestItem(id, requestData) {
    const { error, data, message } = await CustomerSwineCart.requestItem(id, toJS(requestData));
    return {
      error: formatError(error),
      data,
      message
    }
  }

}

export default new SwineCartStore();