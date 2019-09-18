import React, { Fragment, memo } from 'react';

import {  HeaderBar, AddProductButton } from 'shared/components';

import { ProductsList } from './components'

function Container() {

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