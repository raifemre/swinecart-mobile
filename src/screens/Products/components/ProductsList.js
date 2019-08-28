import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridList } from '../../../shared/components';

import Product from './Product';

function ProductsList(props) {

  const isLoading = useSelector(state => state.products.isLoading);
  const products = useSelector(state => state.products.byIds);

  return (
    <GridList
      data={products}
      Component={Product}
      isLoading={isLoading}
    />
  );

}

export default memo(ProductsList, () => true);