import API from './api';
import UserStore from '../mobx/stores/UserStore';

const service = {
  getNotifs() {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}`;
    return API.get(`${URL_PREFIX}/notifications`);
  },
  seeNotif(id) {
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}`;
    return API.post(`${URL_PREFIX}/notifications/see/${id}`);
  }
}

export default service;