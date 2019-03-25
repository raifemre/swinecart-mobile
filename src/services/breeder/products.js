import API from '../api';

const URL_PREFIX = '/breeder/products'

const service = {
  async getProducts(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}`, { page, limit });
    return data;
  },
  async addProduct(requestData) {
    const { data } = await API.post(`${URL_PREFIX}`, requestData);
    return data;
  },
  async deleteProduct(ids) {
    const { data } = await API.delete(`${URL_PREFIX}?ids=${ids.join(',')}`);
    return data;
  },
  async toggleStatus(id) {
    const { data } = await API.patch(`${URL_PREFIX}/${id}/status`);
    return data;
  },
}

export default service;