import { observable, action, runInAction } from 'mobx';
class Product {

  constructor(props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

  @observable id;
  @observable name;
  @observable type;
  @observable breed;
  @observable breed_id;
  @observable age;
  @observable status;

  @observable adg;
  @observable bft;
  @observable fcr;
  @observable birthdate;
  @observable breeder_id;
  @observable farm_from_id
  
  @observable img_path;
  @observable price;
  @observable primary_img_id;
  @observable quantity;
  @observable isSelected = false;

  @observable other_details;
  
  @action setValue(field, value) {
      this[field] = value;
  }

  @action toggleStatus() {
    // runInAction(() => {
      this.status = this.status === 'displayed' ? 'hidden' : 'displayed';
    // });
  }

  @action toggleChecked() {
    runInAction(() => {
      this.isChecked = !this.isChecked;
    });
  }

  @action deleteProduct() {
    runInAction(() => {
      this.dispose();
    });
  }

  @action setIsChecked(isChecked) {
    runInAction(() => {
      this.isChecked = isChecked;
    });
  }
}

export default Product;