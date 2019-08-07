import React, { Fragment, memo } from 'react';

import {
  HeaderBar, BackButton, PreviewButton
} from '../../shared/components';

import { 
  AddProductForm
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar 
        title='Add Product'
        leftControl={<BackButton iconName='x' />}
        rightControls={<PreviewButton />}
      />
      <AddProductForm />
    </Fragment>
  )

}

export default memo(Container);