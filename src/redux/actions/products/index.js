import to from 'await-to-js';

import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS
} from '../../types/products';

import {
  ProductsService
} from '../../../services';

import { productMapper } from '../../../utils/mappers';

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PRODUCTS });

    const [ error, data ] = await to(ProductsService.getProducts());

    if (error) {
      console.dir(error);
    }
    else {
      const { products } = data.data;
      
      dispatch({ 
        type: FETCH_PRODUCTS_SUCCESS,
        payload: { 
          products: products.map(productMapper)
        } 
      });
    }


  }
};