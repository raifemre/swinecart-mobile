import {
  observable, action, toJS, runInAction
} from 'mobx';

import { sortBy } from 'lodash';

import { showMessage } from 'react-native-flash-message';

import {
  SwineCart
} from '../../services';
import { formatError } from '../../utils';


class SwineCartStore {

  page = 1;
  perpage = 8;

  @observable items = [];

  @observable loadingAdd = false;

  @action async addItem(id) {
    try {
      this.loadingAdd = true;
      const { error, data, message } = await SwineCart.addItem(id);
      if (error) {
        throw new Error(formatError(error).errorMessage);
      }
      else {
        if (data) {

        }
        else {
          showMessage({
            message: message,
            type: 'success',
          });
        }
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

  @action async deleteItem(id) {
    const { data: { error, data } } = await SwineCart.deleteItem(id);
    if (error) {
      console.log(error);
    }
    else {
      runInAction(() => {
        this.items = this.items.filter(item => item.id !== id);
      });
    }
  }

  @action async getItems() {
    const { data: { error, data } } = await SwineCart.getItems(1, this.perpage);
    if (error) {
      console.log(error);
    }
    else {

      const items = sortBy(data.items, 'request_status');
      runInAction(() => {
        this.page = 1;
        this.items = items;
      });
    }
  }

  @action async getMoreItems() {
    const { data: { error, data } } = await SwineCart.getItems(this.page + 1, this.perpage);
    if (error) {
      throw new Error(error);
    }
    else {
      runInAction(() => {
        const items = sortBy([...this.items, ...data.items], 'request_status');
        this.items = [];
        this.items.push(...items);
        if (items.length > 0) this.page = this.page + 1;
      });
    }
  }

  @action async requestItem(id, request) {
    console.log(id, request);
    const { data: { error, data } } = await SwineCart.requestItem(id, request);
    if (error) {
      throw new Error(error);
    }
    else {
      console.log(data);
      this.getItems();
    }
  }

}

export default new SwineCartStore();