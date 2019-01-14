import API from './api';
import UserStore from '../mobx/stores/UserStore';

const service = {
  getStats() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.get(`${URL_PREFIX}/stats`);
  },
  getProduct() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.get(`${URL_PREFIX}/product-status`);
  },
  getProductRequests(id) {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.get(`${URL_PREFIX}/product-requests/${id}`);
  },
  getCustomerInfo(id) {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.get(`${URL_PREFIX}/customer-info/${id}`);
  },
  updateProductStatus(id, data) {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.post(`${URL_PREFIX}/product-status/${id}`, data);
  }
}

export default service;