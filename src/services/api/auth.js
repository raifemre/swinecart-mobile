import API from './api';

const URL_PREFIX = '/auth';

const service = {
  async login({ email, password }) {
    const response = await API.post(`${URL_PREFIX}/login`, { email, password });
    return response
  },
  async me() {
    const { data } = await API.get(`${URL_PREFIX}/me`);
    return data;
  },
  logout() {
    return API.post(`${URL_PREFIX}/logout`);
  }
}

export default service;