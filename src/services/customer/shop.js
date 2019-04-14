import API from '../api';

const URL_PREFIX = '/customer/products'

const service = {
  async getProducts(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}`, { page, limit });
    return data;
  },
  async getProductDetails(id) {
    const { data } = await API.get(`/breeder/products/${id}/details`);
    return data;
  },
  async getProductMedia(id) {
    const { data } = await API.get(`/breeder/products/${id}/media`);
    return data;
  }
}

export default service;