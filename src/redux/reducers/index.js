import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ordersReducer from './ordersReducer';
import userReducer from './userReducer';

export default combineReducers({
  form: formReducer,
  // user: userReducer,
  orders: ordersReducer
});