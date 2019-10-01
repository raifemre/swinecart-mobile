import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import {  HeaderBar, AddProductButton } from 'shared/components';

import { ProductsList } from './components'

function Container() {

  const getProducts = useStoreActions(actions => actions.products.getProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      <HeaderBar 
        title='Products'
        leftControl={<AddProductButton />}
      />
      {/* <ProductsList /> */}
    </Fragment>
  );

}

export default memo(Container, () => true);