import API from './api';
const URL_PREFIX = '/auth';

export default {
  async login(email, password) {
    return await API.post(`${URL_PREFIX}/login`, { email, password });
  },
  // async me() {
  //   const { data } = await API.get(`${URL_PREFIX}/me`);
  //   return data;
  // },
  // logout() {
  //   return API.post(`${URL_PREFIX}/logout`);
  // }
};