import API from './api';

const URL_PREFIX = '/customer/products'

const service = {
  getProducts(page, perpage) {
    return API.get(`${URL_PREFIX}`, { page, perpage });
  },
}

export default service;