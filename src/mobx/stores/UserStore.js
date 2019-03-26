import { observable, action, runInAction, computed } from 'mobx';
import { Auth } from '../../services';

class UserStore {

  @observable user = null;

  @action async getUser() {
    const { error, data } = await Auth.me();
    if (error) {
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
    runInAction(() => {
      this.user = undefined;
    });
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