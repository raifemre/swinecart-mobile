import { observable, action, runInAction } from 'mobx';

import UserStore from '../stores/UserStore';
class Product {

  constructor(props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

  @observable adg;
  @observable age;
  @observable backfat_thickness;
  @observable birthdate;
  @observable breed;
  @observable breed_id;
  @observable breeder_id;
  @observable farm_from_id = UserStore.breederProfile.farm_addresses[0].id;
  @observable fcr;
  @observable id;
  @observable img_path;
  @observable name;
  @observable other_details;
  @observable price;
  @observable primary_img_id;
  @observable quantity;
  @observable status;
  @observable type;
  @observable isChecked = false;
  @observable motherBreed = '';
  @observable fatherBreed = '';

  @action setValue(field, value) {
    this[field] = value;
  }

  @action setStatus(status) {
    runInAction(() => {
      this.status = status;
    });
  }

  @action toggleChecked() {
    runInAction(() => {
      this.isChecked = !this.isChecked;
    });
  }

  @action setIsChecked(isChecked) {
    runInAction(() => {
      this.isChecked = isChecked;
    });
  }
}

export default Product;