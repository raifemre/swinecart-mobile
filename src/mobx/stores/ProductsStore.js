import {
  observable, action, toJS, runInAction
} from 'mobx';

import { 
  BreederProducts
} from '../../services';

import Product from '../models/Product';

class ProductsStore {

  @observable _products = [];
  @observable newProduct = new Product({});

  @action async getProducts(page = 1) {
    const { data: { data: { data } } } = await BreederProducts.getProducts(page);
    runInAction(() => {
      const products = data.map(p => new Product(p));
      this._products.push(...products);
    });
  }

  @action async addProduct() {
    const {
      adg, birthdate, backfat_thickness, breed, farm_from_id, fcr,
      name, other_details, price, type, fatherBreed, motherBreed
    } = this.newProduct;
    const data = { 
      adg, birthdate, backfat_thickness, breed, farm_from_id, fcr,
      name, other_details, price, type,
    };
    const fb = fatherBreed.toLowerCase().trim();
    const mb = motherBreed.toLowerCase().trim();
    data.breed = fb !== '' && mb !== '' ? `${fb}+${mb}` : breed;

    const { 
      data: { data: { product, productDetail } } 
    } = await BreederProducts.addNewProduct(data);
    runInAction(() => {
      this._products.unshift(new Product(product));
    });
  }

  @action async deleteProduct({ id }) {
    this._products = this._products.filter(product => product.id !== id);
  }

  @action async toggleStatus({ id }) {
    const product = this._products.find(product => product.id === id);
    const { data: { data: { status } } } = await BreederProducts.toggleStatus(id);
    product.setStatus(status);
  }

  @action toggleCheck({ id }) {
    const product = this._products.find(product => product.id === id);
    product.toggleChecked();
  }

  @action setIsChecked(isChecked) {
    this._products = this._products.map(product => {
      product.setIsChecked(isChecked);
      return product;
    });
  }

}

export default new ProductsStore();