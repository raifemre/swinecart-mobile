import API from '../api';

const URL_PREFIX = '/breeder/inventory';

const service = {
  async getOrders(status, page = 1, limit = 1000) {
    const statusText = {
      'requested': 'requested',
      'reserved': 'reserved',
      'onDelivery': 'on_delivery',
      'sold': 'sold',
    };
    const response = await API.get(`${URL_PREFIX}/products/${statusText[status]}`, { page, limit });
    return response.data;
  },
  getOrderRequests(id, page = 1, limit = 1000) {
    return API.get(`${URL_PREFIX}/products/${id}/requests`, { page, limit });
  },
  // async reserveProduct(requestData) {
  //   const response = await API.post(`${URL_PREFIX}/products/${requestData.product_id}/order-status`, transform('reserveProduct')(requestData));
  //   return data;
  // },
  // async sendForDelivery(requestData) {
  //   const response = await API.post(`${URL_PREFIX}/products/${requestData.product_id}/order-status`, transform('sendForDelivery')(requestData));
  //   return data;
  // },
  // async cancelTransaction(requestData) {
  //   const response = await API.delete(`${URL_PREFIX}/products/${requestData.id}/order-status`, transform('cancelTransaction')(requestData));
  //   return data;
  // },
  // async confirmSold(requestData) {
  //   const response = await API.post(`${URL_PREFIX}/products/${requestData.id}/order-status`, transform('confirmSold')(requestData));
  //   return data;
  // }
}

export default service;