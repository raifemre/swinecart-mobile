import API from './api';
import UserStore from '../mobx/stores/UserStore';

const service = {
  getStats() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/dashboard`;
    return API.get(`${URL_PREFIX}/stats`);
  },
}

export default service;