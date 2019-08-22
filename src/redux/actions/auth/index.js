
import to from 'await-to-js';

import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE 
} from '../../types/auth';

import {
  AuthService, NavigationService
} from '../../../services';

export function loginUser(email, password) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    
    const [error, data] = await to(AuthService.login(email, password));

    NavigationService.navigate('Breeder');

    if (error) {
      console.dir(error, data);
      dispatch({ type: LOGIN_FAILURE });
    }
    else {
      dispatch({ type: LOGIN_SUCCESS });
    }


  };
}

export function logoutUser() {

}