import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import Spinner from 'react-native-loading-spinner-overlay';
import { HeaderBar, BackButton } from 'shared/components';

import { RequestsList } from './components';

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <Spinner
        visible={isLoading}
        textContent={'Reserving Product...'}
        textStyle={{
          color: '#000000'
        }}
      />
      <HeaderBar
        title='Requests'
        leftControl={<BackButton />}
      />
      <RequestsList />
    </Fragment>
  );
}

export default memo(Container, () => true);