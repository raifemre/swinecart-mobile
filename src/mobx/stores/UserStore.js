import {
  observable, action, toJS, autorun, runInAction, computed
} from 'mobx';

import {
  Auth, Profile
} from '../../services';

import BreederProfile from '../models/BreederProfile';
import Farm from '../models/Farm';
class UserStore {

  @observable user;
  @observable loadinguser;
  @observable updatingUser;
  @observable breederProfile = new BreederProfile();
  @observable provinces = [];
  @observable farms = [];

  @action async getUser() {
    const { data: { user }  } = await Auth.me();
    runInAction(() => {
      this.user = user;
    });
  }
  
  @action forgetUser() {
    this.user = undefined;
  }

  @action async changePassword({ currentPassword, newPassword, newPasswordConfirmation }) {
    const { data } = await Profile.changePassword({ currentPassword, newPassword, newPasswordConfirmation });
    return data;
  }

  @action async getProfile() {
    if(this.userRole === 'Breeder') {
      const { data: { data: { breeder, farmAddresses, provinces } } } = await Profile.getProfile();
      runInAction(() => {
        this.breederProfile = new BreederProfile(breeder);
        this.provinces = provinces;
        this.farms = farmAddresses.map(f => new Farm(f));
      });
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

  // reactToUserChange = autorun(() => { console.log('User:', toJS(this.user)) });

}

export default new UserStore();