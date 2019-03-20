import API from '../api';

const URL_PREFIX = '/breeder/dashboard';

const service = {
  getStats() {
    return API.get(`${URL_PREFIX}/stats`);
  },
  getProduct() {
    return API.get(`${URL_PREFIX}/product-status`);
  },
  getProductRequests(id) {
    return API.get(`${URL_PREFIX}/product-requests/${id}`);
  },
  getCustomerInfo(id) {
    return API.get(`${URL_PREFIX}/customer-info/${id}`);
  },
  updateProductStatus(id, data) {
    return API.post(`${URL_PREFIX}/product-status/${id}`, data);
  }
}

export default service;