import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {  HeaderBar, AddProductButton } from '../../shared/components';
import { ProductsList } from './components'

import { fetchProducts } from '../../redux/actions/products';

function Container() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Fragment>
      <HeaderBar 
        title='Products'
        leftControl={<AddProductButton />}
      />
      <ProductsList />
    </Fragment>
  );

}

export default memo(Container, () => true);