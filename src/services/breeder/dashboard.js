import API from '../api';

const URL_PREFIX = '/breeder/dashboard';

const service = {
  async getStats() {
    const { data }  = await API.get(`${URL_PREFIX}/stats`);
    return data;
  },
}

export default service;