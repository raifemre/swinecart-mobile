import API from './api';

const URL_PREFIX = 'customer/swinecart';

const service = {
  async addItem(id) {
    const { data } = await API.post(`${URL_PREFIX}/items/${id}`);
    return data;
  },
  deleteItem(id) {
    return API.delete(`${URL_PREFIX}/items/${id}`);
  },
  getItems(status = 'not_requested', page, perpage) {
    return API.get(`${URL_PREFIX}/items`, { status, page, perpage });
  },
  requestItem(id, data) {
    return API.put(`${URL_PREFIX}/items/${id}`, { ...data });
  }
}

export default service;