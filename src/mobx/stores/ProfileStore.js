import {
  observable, action, runInAction, toJS
} from 'mobx';

import { BreederProfile } from '../../services';

import UserStore from './UserStore';

import { formatError } from '../../utils';

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

  @action async changePassword(requestData) {
    if (UserStore.userRole === 'Breeder') {
      const { error, data, message } = await BreederProfile.changePassword(toJS(requestData));
      return {
        error: formatError(error),
        data,
        message
      }
    }
  }

}

export default new ProfileStore();