import API from '../api';


const URL_PREFIX = '/breeder/products'

const service = {
  getProducts(page, limit = 1000) {
    return API.get(`${URL_PREFIX}`, { page, limit });
  },
  // async getProductDetails(id) {
  //   const { data } = await API.get(`${URL_PREFIX}/${id}/details`);
  //   return data;
  // },
  // async addProduct(requestData) {
  //   const { data } = await API.post(`${URL_PREFIX}`, transform('addProduct')(requestData));
  //   return data;
  // },
  // async deleteProduct(ids) {
  //   const { data } = await API.delete(`${URL_PREFIX}?ids=${ids.join(',')}`);
  //   return data;
  // },
  // async toggleStatus(id) {
  //   const { data } = await API.patch(`${URL_PREFIX}/${id}/status`);
  //   return data;
  // },
}

export default service;