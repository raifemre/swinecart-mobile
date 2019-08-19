import React, { Fragment, memo, useState, useEffect } from 'react';

import {
  HeaderBar, BackButton,
} from '../../shared/components';

import {
  RequestsList
} from './components';

import { OrderService } from '../../services';

function Container({ navigation }) {

  const [ requests, setRequests ] = useState(null);

  useEffect(() => {
    const requestId = navigation.getParam('id');
    OrderService.getOrderRequests(requestId)
      .then((response) => {
        const requests = response.data.requests;
        setRequests(requests);
      });
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