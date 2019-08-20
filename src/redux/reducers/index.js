import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ordersReducer from './ordersReducer';
import authReducer from './authReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  orders: ordersReducer
});