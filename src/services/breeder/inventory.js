import API from '../api';

const URL_PREFIX = '/breeder/inventory';

const service = {
  async getProducts(status, page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/products/${status}`, { page, limit });
    return data;
  },
}

export default service;