import React, { Fragment, memo, useState } from 'react';

import { HeaderBar } from '../../shared/components';

import { OrdersTabView, OrdersList } from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Orders' />
      <OrdersTabView />
      {/* <OrdersList status='requested' /> */}
    </Fragment>
  );

}

export default memo(Container);