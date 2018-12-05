import axios from 'axios';

import {
  API_URL
} from 'react-native-dotenv';

import CommonStore from '../mobx/stores/CommonStore';
import UserStore from '../mobx/stores/UserStore';

import Navigation from './navigation';

// const API_URL = 'http://swinecart.test/api';

console.log('API_URL:', API_URL);

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000
});

instance.interceptors.request.use(
  config => {
    const token = CommonStore.token;
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => response,
  async (err) => {
    if(err && err.response) {
      if (err.response.status === 401) {
        await CommonStore.removeToken(null);
        await UserStore.forgetUser();
        Navigation.navigate('Public');
      }
      else {
        return Promise.reject(err.response);
      }
    }
    return Promise.reject(err);
  }
);



const api = {
  get(url, options = {}) {
    return instance.get(url, options);
  },
  delete(url, options = {}) {
    return instance.delete(url, options);
  },
  post(url, data = {}, options = {}) {
    return instance.post(url, data, options);
  },
  put(url, data = {}, options = {}) {
    return instance.put(url, data, options);
  }
};

export default api;