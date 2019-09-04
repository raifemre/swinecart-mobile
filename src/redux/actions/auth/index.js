import AsyncStorage from '@react-native-community/async-storage';
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

    if (error) {
      console.dir(error);
      dispatch({ type: LOGIN_FAILURE });
    }
    else {
      if (data) {
        const { token } = data.data;
        await AsyncStorage.setItem('token', token);
        dispatch({ type: LOGIN_SUCCESS });
        // NavigationService.navigate('Breeder');
      }
    }


  };
}

export function logoutUser() {

}