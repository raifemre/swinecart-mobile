import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView
} from '../../shared/components';

import {
  OrderItem
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar 
        title='Orders'
      />
      <ContainerView>
        <OrderItem
          data={{ name: 'SUPERBB LARGEWHITE 708', type: 'Sow', breed: 'Landrace', customerName: 'Cecile Carter', statusTime: 'Jul 24 (Wed), 10:30 PM', status: 'requested' }}
        />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);