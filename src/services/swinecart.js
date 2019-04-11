import API from './api';

const URL_PREFIX = 'customer/swinecart';

const service = {
  async addItem(id) {
    const { data } = await API.post(`${URL_PREFIX}/items/${id}`);
    return data;
  },
  async removeItem(id) {
    const { data } = await API.delete(`${URL_PREFIX}/items/${id}`);
    return data;
  },
  async getItems(status = 'not_requested', page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/items?status=${status}`, { page, limit });
    return data;
  },
  requestItem(id, data) {
    return API.put(`${URL_PREFIX}/items/${id}`, { ...data });
  }
}

export default service;