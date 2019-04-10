import API from './api';

const URL_PREFIX = '/customer/products'

const service = {
  async getProducts(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}`, { page, limit });
    return data;
  },
  getProductDetails(id) {
    return API.get(`/breeder/products/${id}/details`);
  }
}

export default service;