import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import OrderItem from './OrderItem';

import { createRandomOrders } from '../../../utils/mockdata';
import { getHeight } from '../../../utils/helpers';
const orders = createRandomOrders(20);

function OrdersList({ status, themedStyle }) {
  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => item.id;
  const getItemLayout = (data, index) => ({
    length: getHeight(status),
    offset: getHeight(status) * index,
    index
  });

  return (
    <FlatList
      data={orders}
      extraData={orders}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      showsVerticalScrollIndicator={false}
      style={themedStyle.container}
    />
  );
}

export default withStyles(memo(OrdersList), () => ({
  container: {
    backgroundColor: colors.gray2,
  }
}));