import {
  observable, action, runInAction, computed
} from 'mobx';

import {
  BreederProfile
} from '../../services';

import UserStore from './UserStore';

class ProfileStore {

  @observable profile = null;

  @action async getProfile() {
    if (UserStore.userRole === 'Breeder') {
      try {
        const { data } = await BreederProfile.getProfile();
        const { profile } = data;
        runInAction(() => {
          this.profile = profile;
        });
      }
      catch (e) {
        console.log(e);
      }
    }
  }

}

export default new ProfileStore();