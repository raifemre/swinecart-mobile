import API from '../api';
const URL_PREFIX = `/breeder/profile`;

const service = {
  async changePassword(requestData) {
    const { data } = await API.patch(`${URL_PREFIX}/password`, requestData);
    return data;
  },
  async getProfile() {
    const { data } = await API.get(`${URL_PREFIX}/`);
    return data;
  },
  updateProfile(data) {
    return API.post(`${URL_PREFIX}/update-personal`, data);
  }
}

export default service;