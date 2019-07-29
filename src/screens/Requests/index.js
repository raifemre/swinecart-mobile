import React, { Fragment, memo } from 'react';

import {
  HeaderBar, ContainerView, BackButton,
} from '../../shared/components';

import {
  RequestItem
} from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar
        title='Requests'
        leftControl={<BackButton />}
      />
      <ContainerView>
        <RequestItem data={{ customerProvince: 'Batangas', customerName: 'Cecile Carter' }} />
        <RequestItem data={{ customerProvince: 'Batangas', customerName: 'Cecile Carter' }} />
        <RequestItem data={{ customerProvince: 'Batangas', customerName: 'Cecile Carter' }} />
      </ContainerView>
    </Fragment>
  )

}

export default memo(Container);