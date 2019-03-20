import {
  observable, action, runInAction, computed
} from 'mobx';

import {
  Auth, BreederProfile
} from '../../services';

import { transformChangePass } from '../../utils';
class UserStore {

  @observable user = null;

  @action async getUser() {
    const { data: { error, data } } = await Auth.me();
    if(error) {
      console.log(error);
    }
    else {
      const { user } = data;
      runInAction(() => {
        this.user = user;
      })
    }
  }
  
  @action forgetUser() {
    this.user = undefined;
  }

  @action async changePassword(form) {
    const { error, message, data } = await BreederProfile.changePassword(transformChangePass(form));
    if (error) {
      const { current_password } = error;
      if(current_password) {
        throw new Error(current_password[0]);
      }
      else {
        throw new Error('Something happened!');
      }
    }
    else {
      return { message, data };
    }
  }

  @action async getProfile() {
    if (this.userRole === 'Breeder') {
      try {
        const { data: { data } } = await BreederProfile.getProfile();
      // console.log(data);
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  @computed get userId() {
    return this.user && this.user.id;
  }

  @computed get userRole() {
    if(this.user) {
      const role = this.user.userable_type.split('\\')[2];
      return role;
    }
    return undefined;
  }
}

export default new UserStore();