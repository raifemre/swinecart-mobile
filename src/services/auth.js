import API from './api';

const URL_PREFIX = '/auth'

const service = {
  async login({ email, password }) {
    const { data } = await API.post(`${URL_PREFIX}/login`, { email, password });
    return data;
  },
  me() {
    return API.get(`${URL_PREFIX}/me`);
  },
  logout() {
    return API.post(`${URL_PREFIX}/logout`);
  }
}

export default service;