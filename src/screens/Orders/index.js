import React, { Fragment, memo } from 'react';
import { HeaderBar } from '../../shared/components';
import { OrdersTabView } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Orders' />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);