
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from '../types/auth';

const initialState = {
  isLoggingIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    default: 
      return state;
  }
}

