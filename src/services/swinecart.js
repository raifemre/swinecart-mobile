import API from './api';

const URL_PREFIX = 'customer/swinecart/'

const service = {
  addItem(id) {
    return API.post(`${URL_PREFIX}items/${id}`);
  },
  deleteItem(id) {
    return API.delete(`${URL_PREFIX}items/${id}`);
  },
  getItems() {
    return API.get(`${URL_PREFIX}items`);
  },
  requestItem(id) {
    return API.put(`${URL_PREFIX}items/${id}`);
  }
}

export default service;