import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme';

import OrderItem from './OrderItem';
import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';

import { getHeight } from '../../../utils/helpers';
import { createRandomOrders } from '../../../utils/mockdata';
import { orderMapper } from '../../../utils/mappers';

// import { fetchOrders } from '../../../redux/actions';

function OrdersList({ themedStyle, status }) {

  const [orders, setOrders] = useState(null);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fakeOrders = createRandomOrders(1, status);
    // console.dir(fakeOrders);
    const newOrders = fakeOrders.map(orderMapper);
    setOrders(newOrders);
  }, [ ]);

  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => `${item.product.id}`; 
  const getItemLayout = (data, index) => {
    return {
      length: getHeight(status),
      offset: getHeight(status) * index,
      index
    };
  };

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Orders!'} />
  );
  
  const renderFooterComponent = () => {
    return (
      <ListFooter isRefreshing={isRefreshing} />
    )
  };

  const onEndReached = () => {

  };

  const onRefresh = () => {
  };

  return (
    <Fragment>
      {orders && <FlatList
        data={orders}
        extraData={orders}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={renderListEmptyComponent}
        ListFooterComponent={renderFooterComponent}
        ListFooterComponentStyle={themedStyle.ListFooterStyle}
        showsVerticalScrollIndicator={false}
        style={themedStyle.containerStyle}
        contentContainerStyle={themedStyle.contentContainerStyle}
      />}
      {!orders && <LoadingView />}
    </Fragment>
  );
}

export default withStyles(OrdersList, () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));