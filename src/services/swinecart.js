import API from './api';

const URL_PREFIX = 'customer/swinecart/'

const service = {
  addItem(id) {
    return API.post(`${URL_PREFIX}items/${id}`);
  },
  deleteItem(id) {
    return API.delete(`${URL_PREFIX}items/${id}`);
  },
  getItems(page, perpage) {
    return API.get(`${URL_PREFIX}items`, { page, perpage });
  },
  requestItem(id, data) {
    return API.put(`${URL_PREFIX}items/${id}`, { ...data });
  }
}

export default service;