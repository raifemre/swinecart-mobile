import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import OrderItem from './OrderItem';

import { createRandomOrders } from '../../../utils/mockdata';
const orders = createRandomOrders(100);

function OrdersList(props) {
  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => item.id;

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      initialNumToRender={5}
      maxToRenderPerBatch={6}
      showsVerticalScrollIndicator={false}
      style={props.themedStyle.container}
    />
  );
}

export default withStyles(memo(OrdersList), () => ({
  container: {
    backgroundColor: colors.gray2,
  }
}));