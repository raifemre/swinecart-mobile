import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrderItem from './OrderItem';
import { List } from 'shared/components';

import { fetchOrders, fetchMoreOrders } from 'actions/orders';

function OrdersList({ status }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders(status, currentPage, limit));
  }, []);

  const orders = useSelector(state => state.orders[status].byIds);
  const isLoading = useSelector(state => state.orders[status].isLoading);
  const isRefreshing = useSelector(state => state.orders[status].isRefreshing);
  const isLoadingMore = useSelector(state => state.orders[status].isLoadingMore);
  const currentPage = useSelector(state => state.orders[status].currentPage);
  const limit = useSelector(state => state.orders[status].limit);

  const keyExtractor = item => `${item.product.id}`;
  const onEndReached = () => {
    dispatch(fetchMoreOrders(status, currentPage, limit));
  };

  const onRefresh = () => {
    dispatch(fetchOrders(status, 1, limit));
  };

  return (
    <List
      data={orders}
      Component={OrderItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Orders!'}
      isRefreshing={isRefreshing}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(OrdersList);