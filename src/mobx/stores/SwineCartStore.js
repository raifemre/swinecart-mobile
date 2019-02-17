import {
  observable, action, toJS, runInAction
} from 'mobx';

import { sortBy } from 'lodash';


import {
  SwineCart
} from '../../services';



class SwineCartStore {

  page = 1;
  perpage = 8;

  @observable items = [];

  @action async addItem(id) {
    const { data: { error, data } } = await SwineCart.addItem(id);
    if(error) {
      console.log(error);
    }
    else {
      const { item } = data;
      runInAction(() => {
        this.items.push(item);
      });
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
      const { count, items } = data;
      runInAction(() => {
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