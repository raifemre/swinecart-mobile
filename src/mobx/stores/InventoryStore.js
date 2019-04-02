import { observable, action, runInAction, toJS, remove } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { BreederInventory, Navigation } from '../../services';

import { filterNewItems, formatError } from '../../utils';

class InventoryStore {

  limit = 8

  @observable selectedIndex = 1;
  @observable products = {}
  @observable pages = {}
  @observable maps = {}
  @observable requests = null;

  @observable reserveLoading = false;
  @observable cancelTranLoading = false;
  @observable confirmSoldLoading = false;

  @observable onSelectIndex(index) {
    runInAction(() => {
      this.selectedIndex = index;
    });
  }

  // UPDATE ORDER STATUS

  @action async reserveProduct(requestData) {
    try {
      this.reserveLoading = true;
      const { error, data, message } = await BreederInventory.reserveProduct(toJS(requestData));
      if (error) {
        const { field, errorMessage } = formatError(error);
        if (field) {
          this.showError(field, errorMessage);
        }
        else {
          throw new Error(errorMessage);
        }
      }
      else {
        const { product } = data;
        this._addProduct('reserved', product);
        this._removeProduct('requested', product.id);
        showMessage({
          message: `Product is now reserved!`,
          type: 'success',
        });
        Navigation.back();
        this.onSelectIndex(1);
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
        this.reserveLoading = false;
      });
    }
  }

  @action async confirmSold(requestData) {
    try {
      this.confirmSoldLoading = true;
      const { error, data, message } = await BreederInventory.confirmSold(toJS(requestData));
      if (error) {
        const { field, errorMessage } = formatError(error);
        if (field) {
          this.showError(field, errorMessage);
        }
        else {
          throw new Error(errorMessage);
        }
      }
      else {
        const { product } = data;
        this._addProduct('sold', product);
        this._removeProduct('on_delivery', product.id);
        showMessage({
          message: `Product is now sold!`,
          type: 'success',
        });
        Navigation.back();
        this.onSelectIndex(3);
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
        this.confirmSoldLoading = false;
      });
    }
  }

  @action async cancelTransaction(status, requestData) {
    try {
      this.cancelTranLoading = true;
      const { error, data, message } = await BreederInventory.cancelTransaction(toJS(requestData));
      if (error) {
        const { field, errorMessage } = formatError(error);
        if (field) {
          this.showError(field, errorMessage);
        }
        else {
          throw new Error(errorMessage);
        }
      }
      else {
        this._removeProduct(status, requestData.id);
        showMessage({
          message: 'Cancelled Transaction!',
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
        this.cancelTranLoading = false;
      });
    }
  }

  // Utility Functions

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
      const newItems = filterNewItems(this.maps[status], [product], status === 'requested' ? 'id' : 'reservation.id');
      this.products[status].unshift(...newItems);
    })
  }

  // GET PRODUCTS BASED ON STATUS

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

      this.products[status] = filterNewItems(this.maps[status], products, status === 'requested' ? 'id' :  'reservation.id');
    });
  }

  @action async getMoreProducts(status) {
    const { data } = await BreederInventory.getProducts(status, this.pages[status], this.limit);
    const { count, products } = data;
    runInAction(() => {
      if (count >= this.limit) {
        this.pages[status] = this.pages[status] + 1;
      }
      this.products[status].push(...filterNewItems(this.maps[status], products, status === 'requested' ? 'id' :  'reservation.id'));
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