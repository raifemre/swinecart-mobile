import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView
} from '../../shared/components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Cart'
      />
      <ContainerView>
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);