import apisauce from 'apisauce';
import { API_URL } from 'react-native-dotenv';

import CommonStore from '../mobx/stores/CommonStore';

import Navigation from './navigation';

import { showToast } from '../utils';

const instance = apisauce.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    // 'Accept-Encoding' : 'gzip'
  }
});

instance.addRequestTransform(request => {
  const token = CommonStore.token;
  const data = `Bearer ${token}`;
  request.headers['Authorization'] = token ? data : null;
});

instance.addResponseTransform(response => {

  const { ok, problem, status } = response;
  const { config, ...res } = response;
  // console.dir(response);

  if(!ok) {
    if(problem === 'NETWORK_ERROR') {
      showToast('Something went wrong!', 'danger', 'bottom');
    }
    if(problem === 'CLIENT_ERROR') {
      console.log('STATUS CODE:', status);
      if(status === 401) {
        Navigation.navigate('Login');
      }
    }
  }
  
});

instance.addMonitor(({ config: request, ...response }) => {
  const { headers: reqHeaders, data: reqData, url: endpoint } = request;
  const { headers: resHeaders, data: resData, duration: resDuration } = response;

  // console.dir('Request Headers: ', reqHeaders);
  // console.dir('Request Token:', reqHeaders.Authorization);
  // console.dir('Request Data: ', reqData);
  console.dir(resDuration, 'Request Endpoint:', endpoint);

  // console.dir('Response Headers: ', resHeaders);
  // console.dir('Response Data: ', resData);
});


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
  },
  patch(url, data = {}, options = {}) {
    return instance.patch(url, data, options);
  }
};

export default api;