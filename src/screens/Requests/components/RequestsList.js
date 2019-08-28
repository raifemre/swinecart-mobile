import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestItem from './RequestItem';

import { getOrderRequests, getMoreOrderRequests } from '../../../redux/actions/requests';

import { List } from '../../../shared/components';

function RequestsList() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderRequests(currentId, 1, limit));
  }, []);

  const currentId = useSelector(state => state.requests.currentId);
  const requests = useSelector(state => state.requests.byIds);
  const isLoading = useSelector(state => state.requests.isLoading);
  const isRefreshing = useSelector(state => state.requests.isRefreshing);
  const isLoadingMore = useSelector(state => state.requests.isLoadingMore);
  const currentPage = useSelector(state => state.requests.currentPage);
  const limit = useSelector(state => state.requests.limit);

  const keyExtractor = item => `${item.customerId}`;
  const onPressLoadMore = () => {
    dispatch(getMoreOrderRequests(currentId, currentPage, limit));
  };

  const onRefresh = () => {
    dispatch(getOrderRequests(currentId, 1, limit));
  };

  return (
    <List
      data={requests}
      Component={RequestItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Requests!'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(RequestsList);