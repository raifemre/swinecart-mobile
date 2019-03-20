import API from '../api';

const URL_PREFIX = '/breeder/dashboard';

const service = {
  getFarms() {
    return API.get(`${URL_PREFIX}/stats`);
  },
}

export default service;