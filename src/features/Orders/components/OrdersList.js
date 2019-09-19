import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List, LoadingView } from 'shared/components';

import OrderItem from './OrderItem';

function orderObjectGetter(state, status) {
  return state.orders.ordersByStatus[status];
}

function OrdersList({ status }) {

  useEffect(() => {
    getOrders({ status });
  }, []);

  const getOrders = useStoreActions(
    actions => actions.orders.getOrdersByStatus
  );

  const getMoreOrders = useStoreActions(
    actions => actions.orders.getMoreOrdersByStatus
  );

  const orders = useStoreState(state =>
    orderObjectGetter(state, status).orders
  );

  const isRefreshing = useStoreState(state => 
    orderObjectGetter(state, status).isRefreshing
  );

  const isLoadingMore = useStoreState(state =>
    orderObjectGetter(state, status).isLoadingMore
  );

  const isLoading = useStoreState(state =>
    orderObjectGetter(state, status).isLoading
  );

  const keyExtractor = item => {
    return item.reservation ? `${item.reservation.id}` : `${item.product.id}`;
  };

  const onPressLoadMore = () => {
    getMoreOrders({ status });
  };

  const onRefresh = () => {
    getOrders({ status });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && orders) {
    return (
      <List
        data={orders}
        Component={OrderItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Orders!'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
}

export default memo(OrdersList);