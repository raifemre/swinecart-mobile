import React, { Fragment, memo } from 'react';
import { HeaderBar, BackButton } from 'shared/components';

import { RequestsList } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar
        title='Requests'
        leftControl={<BackButton />}
      />
      <RequestsList />
    </Fragment>
  );
}

export default memo(Container, () => true);