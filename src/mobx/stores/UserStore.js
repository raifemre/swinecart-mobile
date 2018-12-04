import {
  observable, action, toJS, autorun, runInAction, computed
} from 'mobx';

import {
  Auth, Profile
} from '../../services';
class UserStore {

  @observable user;
  @observable loadinguser;
  @observable updatingUser;

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
    const data = await Profile.changePassword({ currentPassword, newPassword, newPasswordConfirmation });
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

  reactToUserChange = autorun(() => { console.log('User:', toJS(this.user)) });

}

export default new UserStore();