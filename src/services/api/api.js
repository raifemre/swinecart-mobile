import AsyncStorage from '@react-native-community/async-storage';
import apisauce from 'apisauce';
import { API_URL } from 'react-native-dotenv';

import Navigation from '../navigation';

const instance = apisauce.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
  }
});

console.log(API_URL);

instance.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('token');
  const data = `Bearer ${token}`;
  request.headers['Authorization'] = token ? data : null;
});

instance.addResponseTransform(response => {

  const { ok, problem, status } = response;
  const { config, ...res } = response;
  // console.dir(response);

  if (!ok) {
    if (problem === 'NETWORK_ERROR') {
    }
    if (problem === 'CLIENT_ERROR') {
      // console.log('STATUS CODE:', status);
      if(status === 401) {
        Navigation.navigate('Login');
      }
      else if (status === 404) {
      }
    }
    if (problem === 'TIMEOUT_ERROR')  {
      // console.log('timeout');
    }
  }

});

instance.addMonitor(({ config: request, ...response }) => {
  const { headers: reqHeaders, data: reqData, url: endpoint } = request;
  const { headers: resHeaders, data: resData, duration: resDuration } = response;

  // console.dir('Request Headers: ', reqHeaders);
  // console.dir('Request Token:', reqHeaders.Authorization);
  // console.dir('Request Data: ', reqData);
  // console.dir(resDuration, 'Request Endpoint:', endpoint);

  // console.dir('Response Headers: ', resHeaders);
  // console.dir('Response Data: ', resData);
});


const api = {
  get(url, params = {}, options = {}) {
    return instance.get(url, params, options);
  },
  delete(url, params = {}, options = {}) {
    return instance.delete(url, params, options);
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