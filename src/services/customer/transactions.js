import API from '../api';
import transform from '../../transformers';

const URL_PREFIX = 'customer/transactions';

const service = {
  async addItem(id) {
    const { data } = await API.post(`${URL_PREFIX}/items/${id}`);
    return data;
  },
  async rateBreeder(id, requestData) {
    console.dir(id, transform('rateBreeder')(requestData));
    const { data } = await API.post(`${URL_PREFIX}/reviews/${id}`,
      transform('rateBreeder')(requestData));
    return data;
  },
}

export default service;