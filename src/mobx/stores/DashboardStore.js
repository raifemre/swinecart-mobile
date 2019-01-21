import {
  observable, action, toJS, runInAction, computed
} from 'mobx';

import {
  Dashboard
} from '../../services';


class DashboardStore {

  @observable stats = {};

  @observable hidden = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable displayed = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable requested = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable reserved = { boar: 0, sow: 0, gilt: 0, semen: 0 };
  @observable on_delivery = { boar: 0, sow: 0, gilt: 0, semen: 0 };

  @observable ratings = {};

  @observable overall = 0;
  @observable delivery = 0;
  @observable transaction = 0;
  @observable productQuality = 0;
  @observable reviewsSize = 0;

  @observable products = [];
  @observable selectedProduct = null;
  @observable productRequests = [];
  @observable currentCustomerInfo;

  @observable activeTab = 0;

  @computed get requestedProducts() {
    return this.products.filter(p => p.status === 'requested');
  }

  @computed get reservedProducts() {
    return this.products.filter(p => p.status === 'reserved');
  }

  @computed get onDeliveryProducts() {
    return this.products.filter(p => p.status === 'on_delivery');
  }
  @computed get soldProducts() {
    return this.products.filter(p => p.status === 'sold');
  }

  @action async getStats() {
    const { data: { data } } = await Dashboard.getStats();
    runInAction(() => {
      this.stats = data;
      const { hidden, displayed, requested, reserved, on_delivery, ratings } = data;
      const { overall, delivery, transaction, productQuality, reviewsSize } = ratings;
      this.hidden = hidden;
      this.displayed = displayed;
      this.requested = requested;
      this.reserved = reserved;
      this.on_delivery = on_delivery;
      this.ratings = ratings;
      this.overall = overall;
      this.delivery = delivery;
      this.transaction = transaction;
      this.productQuality = productQuality;
      this.reviewsSize = reviewsSize;

    });
  }

  @action async cancelTransaction(product) {

    const { id, reservation_id } = product;

    const { data: response } = await Dashboard.updateProductStatus(id, {
      status: 'cancel_transaction',
      reservation_id,
      product_id: id
    });

    console.log(response);
    await this.getProducts();
  }

  @action async reserveProduct(request) {
    const {
      customerId, swineCartId, requestQuantity, dateNeeded, specialRequest
    } = request;

    const data = {
      product_id: this.selectedProduct.id,
      customer_id: customerId,
      swinecart_id: swineCartId,
      request_quantity: requestQuantity,
      date_needed: dateNeeded,
      special_request: specialRequest,
      status: 'reserved'
    };

    const { data: response } = await Dashboard.updateProductStatus(data.product_id, data);
    console.log(response);
    await this.getProducts();
  }

  @action async sendProduct(product, date) {
    const { reservation_id, id } = product;
    const data = { reservation_id, product_id: id, status: 'on_delivery', delivery_date: date };
    console.log(data);
    const { data: response } = await Dashboard.updateProductStatus(data.product_id, data);
    console.log(response);
    await this.getProducts();
  }

  @action async getProducts() {
    const { data: { data } } = await Dashboard.getProduct();
    runInAction(() => {
      this.products = data;
    });
  }

  @action async getProductRequests() {
    const { data: { data } } = await Dashboard.getProductRequests(this.selectedProduct.id);
    runInAction(() => {
      this.productRequests = data;
    });
  }

  @action async getCustomerInfo(id) {
    const { data: { data } } = await Dashboard.getCustomerInfo(id);
    runInAction(() => {
      this.currentCustomerInfo = data;
    });
  }

  @action setSelectedProduct(product) {
    runInAction(() => {
      this.selectedProduct = product;
    });
  }

  @action clearProductRequests() {
    runInAction(() => {
      this.productRequests = [];
    });
  }

  @action setActiveTab(activeTab) {
    this.activeTab = activeTab;
  }

}

export default new DashboardStore();