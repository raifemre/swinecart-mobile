import React, { useState, memo, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import RequestItem from './RequestItem';

import { getOrderRequests } from '../../../redux/actions/requests';

import { List } from '../../../shared/components';

function RequestsList({ navigation }) {
  
  const dispatch = useDispatch();

  const isFetching = useSelector(state => state.requests.isFetching);
  const requests = useSelector(state => state.requests.byId);

  useEffect(() => {
    const requestId = navigation.getParam('id');
    dispatch(getOrderRequests(requestId));
  }, []);

  const keyExtractor = item => `${item.customerId}`;
  const onEndReached = () => {

  };

  const onRefresh = () => {
    const requestId = navigation.getParam('id');
    dispatch(getOrderRequests(requestId));
  };

  return (
    <List
      data={requests}
      extraData={requests}
      Component={RequestItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Requests!'}
      isRefreshing={isFetching}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      isFetching={isFetching}
    />
  );
}

export default withNavigation(memo(RequestsList));