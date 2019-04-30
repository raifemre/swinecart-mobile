import API from '../api';
import transform from '../../transformers';

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
  async getItemCount() {
    const { data } = await API.get(`${URL_PREFIX}/items/count`);
    return data;
  },
  async requestItem(id, requestData) {
    // console.dir(transform('requestItem')(requestData));
    const { data } = await API.put(`${URL_PREFIX}/items/${id}`, transform('requestItem')(requestData));
    return data;
  }
}

export default service;