import API from './api';

const URL_PREFIX = '/breeder/products'

const service = {
  getProducts(page) {
    return API.get(`${URL_PREFIX}/get`, { params: { page } });
  },
  toggleStatus(id){
    return API.post(`${URL_PREFIX}/product/display/${id}`);
  },
  addNewProduct(data) {
    return API.post(`${URL_PREFIX}/product/store`, data);
  },
  deleteSelected(ids) {
    return API.post(`${URL_PREFIX}/product/delete-selected`, { product_ids: ids });
  },
  updateProduct(data) {
    return API.post(`${URL_PREFIX}/product/update/${data.id}`, data);
  }
}

export default service;