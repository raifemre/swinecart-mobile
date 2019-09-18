import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthService, Api } from 'services';

export default {
  // State
  isLoggingIn: false,
  token: null,
  hasError: false,

  // Computed Values

  // Actions
  setLoggingIn: action((state, payload) => {
    state.isLoggingIn = payload.isLoggingIn;
  }),

  setToken: action((state, payload) => {
    state.token = payload.token;
  }),

  setError: action((state, payload) => {
    state.hasError = payload.hasError;
  }),

  // Side Effects
  login: thunk(async (actions, payload) => {
    const { email, password } = payload;

    actions.setError({ hasError: false });
    actions.setLoggingIn({ isLoggingIn: true });

    const [ error, data ] = await to(AuthService.login({ email, password }));

    if (error) {
      actions.setError({ hasError: true });
    }
    else {
      const { token } = data.data;
      Api.setAuthToken(token);
      actions.setToken({ token });
      actions.saveTokenToStorage({ token });
    }

    actions.setLoggingIn({ isLoggingIn: false });

  }),

  logout: thunk(async (actions, payload) => {

  }),

  getTokenFromStorage: thunk(async (actions, payload) => {
    const token = await AsyncStorage.getItem('token');
    actions.setToken(token);
  }),

  saveTokenToStorage: thunk(async (actions, payload) => {
    const { token } = payload;
    await AsyncStorage.setItem('token', token);
  }),

};