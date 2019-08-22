import React, { Fragment, memo, useState, useEffect } from 'react';

import {
  HeaderBar, BackButton,
} from '../../shared/components';

import {
  RequestsList
} from './components';

import { createRandomRequests } from '../../utils/mockdata';
import { requestMapper } from '../../utils/mappers';

function Container({ navigation }) {

  const [ requests, setRequests ] = useState(null);

  useEffect(() => {
    const requestId = navigation.getParam('id');
    const fakeRequests = createRandomRequests(10);
    const newRequests = fakeRequests.map(requestMapper);
    console.dir(newRequests);
    setRequests(newRequests);
  }, []);

  return (
    <Fragment>
      <HeaderBar
        title='Requests'
        leftControl={<BackButton />}
      />
      <RequestsList requests={requests} />
    </Fragment>
  )

}

export default memo(Container);