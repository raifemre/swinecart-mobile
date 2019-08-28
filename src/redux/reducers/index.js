import { combineReducers } from 'redux';

import ordersReducer from './ordersReducer';
import authReducer from './authReducer';
import requestsReducer from './requestsReducer';
import productsReducer from './productsReducer';
import breederProfileReducer from './breederProfileReducer';

export default combineReducers({
  auth: authReducer,
  orders: ordersReducer,
  requests: requestsReducer,
  products: productsReducer,
  breederProfile: breederProfileReducer,
});