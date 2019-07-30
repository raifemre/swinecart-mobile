import React, { memo } from 'react';
import { FlatList } from 'react-native';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import {
  colors, sizes
} from '../../../constants/theme'

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
    />
  );
}

export default withStyles(memo(OrdersList), () => ({
  container: {
    paddingHorizontal: sizes.padding / 2,
    paddingTop: sizes.padding,
    paddingBottom: sizes.padding * 3,
    backgroundColor: colors.gray2,
  },
  item: {
    flex: 1,
    marginHorizontal: sizes.margin / 2,
    marginVertical: sizes.margin / 2,
  },
}));