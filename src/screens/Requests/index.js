import React, { Fragment, memo, useState, useEffect } from 'react';

import {
  HeaderBar, BackButton,
} from '../../shared/components';

import {
  RequestsList
} from './components';

import { createRandomRequests } from '../../utils/mockdata';

function Container({ navigation }) {

  const [ requests, setRequests ] = useState(null);

  useEffect(() => {
    const requestCount = navigation.getParam('requests');
    const requests = createRandomRequests(requestCount);
    setRequests(requests);
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