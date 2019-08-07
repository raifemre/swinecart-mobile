import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView, BackButton, LoadingView
} from '../../shared/components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Add Product'
        leftControl={<BackButton iconName='x' />}
      />
      <LoadingView />
    </Fragment>
  )

}

export default memo(Container);