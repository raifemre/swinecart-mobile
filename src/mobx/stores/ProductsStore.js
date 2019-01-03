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
  @observable selectedProduct;

  @action async getProducts(page = 1) {
    const { data: { data: { data } } } = await BreederProducts.getProducts(page);
    console.log(data);
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

    console.log(product);

    runInAction(() => {
      this._products.unshift(new Product(product));
    });
  }

  @action async deleteProduct({ id }) {
    const checkedProducts = this._products.reduce((acc, product) => {
      if (product.isChecked) {
        acc.push(product.id);
      }
      return acc;
    }, []);
    if(checkedProducts.length === 0) {
      await BreederProducts.deleteSelected([id]);
      runInAction(() => {
        this._products = this._products.filter(product => product.id !== id);
      });
    }
    else {
      await BreederProducts.deleteSelected(checkedProducts);
      runInAction(() => {
        this._products = this._products.filter(product => (
          checkedProducts.indexOf(product.id) === -1
        ));
      });
    }
    
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

  @action setSelectedProduct(product) {
    runInAction(() => {
      this.selectedProduct = product;
    });
  }

  @action setIsChecked(isChecked) {
    this._products = this._products.map(product => {
      product.setIsChecked(isChecked);
      return product;
    });
  }

}

export default new ProductsStore();