import API from '../api';

const URL_PREFIX = '/breeder/dashboard';

const service = {
  async getStats() {
    const { data }  = await API.get(`${URL_PREFIX}/stats`);
    return data;
  },
  async getRatings() {
    const { data } = await API.get(`${URL_PREFIX}/ratings`);
    return data;
  },
  async getReviews(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/reviews`, { page, limit });
    return data;
  },
}

export default service;