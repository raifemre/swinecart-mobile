import React, { Fragment, memo, useState } from 'react';

import { HeaderBar } from '../../shared/components';

import { OrdersTabView } from './components';

function Container(props) {

  return (
    <Fragment>
      <HeaderBar title='Orders' />
      <OrdersTabView />
    </Fragment>
  );

}

export default memo(Container);