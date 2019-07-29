import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView
} from '../../shared/components';

import {
  RequestedCard, ReservedCard
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar 
        title='Orders'
      />
      <ContainerView>
        <RequestedCard data={{ name: 'SUPERBB LARGEWHITE 708', type: 'Sow', breed: 'Landrace', requests: 2 }} />
        <ReservedCard data={{ name: 'SUPERBB LARGEWHITE 708', type: 'Sow', breed: 'Landrace', customerName: 'Cecile Carter', statusTime: 'Jul 24 (Wed) 10:30 PM' }} />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);