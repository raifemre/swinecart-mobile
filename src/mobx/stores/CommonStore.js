import { observable, runInAction, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class CommonStore {

  @observable token = null;

  @action async setToken(token) {
    await AsyncStorage.setItem('token', token);
    runInAction(() => {
      this.token = token;
    });
  }

  @action async removeToken() {
    await AsyncStorage.removeItem('token');
    runInAction(() => {
      this.token = null;
    });
  }

}

export default new CommonStore();