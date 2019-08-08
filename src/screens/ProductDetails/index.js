import React, { Fragment, memo } from 'react';

import {
  HeaderBar, BackButton, ContainerView
} from '../../shared/components';

import {
  Product
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar
        title='Product Details'
        leftControl={<BackButton />}
      />
      <ContainerView backgroundColor='#ffffff'>
        <Product />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);