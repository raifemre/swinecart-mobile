import AsyncStorage from '@react-native-community/async-storage';
import apisauce from 'apisauce';
import { API_URL } from 'react-native-dotenv';

const base = apisauce.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

console.log(API_URL);

base.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('token');
  request.headers.Authorization = `Bearer ${token}`;
});

base.addResponseTransform(response => {

  const { ok, problem, status } = response;
  const { config, ...res } = response;

  if (!ok) {
    if (problem === 'NETWORK_ERROR') {  
    }
    if (problem === 'CLIENT_ERROR') {
    }
    if (problem === 'TIMEOUT_ERROR') {
    }
    if (problem === 'SERVER_ERROR') {
    }
  }

});

base.addMonitor(({ config: request, ...response }) => {
  const { headers: reqHeaders, data: reqData, url: endpoint } = request;
  const { headers: resHeaders, data: resData, duration: resDuration } = response;

  // console.dir('Request Headers: ', reqHeaders);
  // console.dir('Request Token:', reqHeaders.Authorization);
  // console.dir('Request Data: ', reqData);
  console.dir(resDuration, 'Request Endpoint:', endpoint);

  // console.dir('Response Data: ', resData);
  // console.dir('Response Headers: ', resHeaders);
});

const promiseHandler = ({ data, ok, problem, status }) => {
  return new Promise((resolve, reject) => {
    if (!ok && problem) {
      console.log(data);
      reject({ problem, status });
    }
    else {
      resolve(data);
    }
  });
};

const api = {
  async get(url, params = {}, options = {}) {
    const response = await base.get(url, params, options);
    return promiseHandler(response);
  },
  async delete(url, params = {}, options = {}) {
    const response = base.delete(url, params, options);
    return promiseHandler(response);
  },
  async post(url, data = {}, options = {}) {
    const response = await base.post(url, data, options);
    return promiseHandler(response);
  },
  async put(url, data = {}, options = {}) {
    const response = base.put(url, data, options);
    return promiseHandler(response);
  },
  async patch(url, data = {}, options = {}) {
    const response = base.patch(url, data, options);
    return promiseHandler(response);
  }
};


export default api;