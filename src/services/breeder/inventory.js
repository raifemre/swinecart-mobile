import API from '../api';

import transform from '../../transformers';

const URL_PREFIX = '/breeder/inventory';

const service = {
  async getProducts(status, page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/products/${status}`, { page, limit });
    return data;
  },
  async getProductRequests(id, page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/products/${id}/requests`, { page, limit });
    return data;
  },
  async reserveProduct(requestData) {
    const { data } = await API.post(`${URL_PREFIX}/products/${requestData.product_id}/order-status`, transform('reserveProduct')(requestData));
    return data;
  }
}

export default service;