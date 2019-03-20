import {
  observable, action, runInAction, computed
} from 'mobx';

import {
  Auth, BreederProfile
} from '../../services';
class UserStore {

  @observable user = null;

  @action async getUser() {
    const { data: { error, data }  } = await Auth.me();
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

  @action async changePassword({ currentPassword, newPassword, newPasswordConfirmation }) {
    const { data } = await Profile.changePassword({ currentPassword, newPassword, newPasswordConfirmation });
    return data;
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