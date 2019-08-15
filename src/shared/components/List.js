import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { colors } from '../../../constants/theme';

import {
  EmptyListMessage, LoadingView, ListFooter
} from '../components';

function List({ themedStyle, status }) {

  const [orders, setOrders] = useState(null);
  const [isRefreshing, setRefreshing] = useState([]);

  useEffect(() => {
    const fakeOrders = createRandomOrders(1000, status);
    setOrders(fakeOrders);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => item.id;
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
        initialNumToRender={5}
        maxToRenderPerBatch={5}
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

export default withStyles(memo(List, () => true), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));