import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrderItem from './OrderItem';
import { List } from 'shared/components';

import { fetchOrders } from 'redux/actions/orders';

function OrdersList({ status }) {

  const dispatch = useDispatch();

  const currentStatus = useSelector(state => state.orders.currentStatus);
  const orders = useSelector(state => state.orders[status]);
  const isFetching = useSelector(state => state.orders.isFetching);

  useEffect(() => {
    dispatch(fetchOrders(status));
  }, []);

  const keyExtractor = item => `${item.product.id}`;
  const onEndReached = () => {

  };

  const onRefresh = () => {
    dispatch(fetchOrders(status));
  };

  return (
    <List
      data={orders}
      extraData={orders}
      Component={OrderItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Orders!'}
      isRefreshing={isFetching}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      isFetching={isFetching}
    />
  );
}

export default memo(OrdersList);