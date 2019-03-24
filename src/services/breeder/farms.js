import API from '../api';

const URL_PREFIX = '/breeder/profile';

const service = {
  async getFarms(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/farms`, { page, limit });
    return data;
  },
}

export default service;