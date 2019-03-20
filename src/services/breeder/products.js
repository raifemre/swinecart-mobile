import API from '../api';

const URL_PREFIX = '/breeder/products'

const service = {
  async getProducts(page, limit) {
    const { data } = await API.get(
      `${URL_PREFIX}`,
      { page, limit }
    );
    return data;
  }
}

export default service;