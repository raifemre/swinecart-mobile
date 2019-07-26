import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView
} from '../../shared/components';

import {
  RequestedCard
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar 
        title='Orders'
      />
      <ContainerView>
        <RequestedCard data={{ name: 'SUPERBB LARGEWHITE 708', type: 'Sow', breed: 'Landrace', requests: 2 }} />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);