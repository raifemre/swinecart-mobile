import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import Spinner from 'react-native-loading-spinner-overlay';
import { HeaderBar } from 'shared/components';

import { OrdersTabView } from './components';

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{
          color: '#ffffff'
        }}
      />
      <HeaderBar title='Orders' />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);