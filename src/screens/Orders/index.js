import React, { Fragment, memo } from 'react';
import { HeaderBar } from '../../shared/components';
import { OrdersList } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Orders' />
      <OrdersList />
    </Fragment>
  );
}

export default memo(Container, () => true);