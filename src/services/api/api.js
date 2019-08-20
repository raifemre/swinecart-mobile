import AsyncStorage from '@react-native-community/async-storage';
import apisauce from 'apisauce';
import { API_URL } from 'react-native-dotenv';

import Navigation from '../navigation';

const api = apisauce.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
  }
});

console.log(API_URL);

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('token');
  const authorization = `Bearer ${token}`;
  api.set
});

api.addResponseTransform(response => {

  const { ok, problem, status } = response;
  const { config, ...res } = response;

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

api.addMonitor(({ config: request, ...response }) => {
  const { headers: reqHeaders, data: reqData, url: endpoint } = request;
  const { headers: resHeaders, data: resData, duration: resDuration } = response;

  // console.dir('Request Headers: ', reqHeaders);
  // console.dir('Request Token:', reqHeaders.Authorization);
  // console.dir('Request Data: ', reqData);
  // console.dir(resDuration, 'Request Endpoint:', endpoint);

  // console.dir('Response Headers: ', resHeaders);
  // console.dir('Response Data: ', resData);
});

export default api;