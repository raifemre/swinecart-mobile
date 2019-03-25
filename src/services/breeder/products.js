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
  }
}

export default service;