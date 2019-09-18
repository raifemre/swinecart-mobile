import React, { Fragment, memo } from 'react';
import { HeaderBar } from '../../shared/components';
import { OrdersTabView, OrdersList } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Orders' />
      {/* <OrdersList status='requested' /> */}
      {/* <OrdersTabView /> */}
    </Fragment>
  );
}

export default memo(Container, () => true);