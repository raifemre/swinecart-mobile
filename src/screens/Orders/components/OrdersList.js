import React, { Fragment, memo } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import OrderItem from './OrderItem';

import { EmptyListMessage, LoadingView } from '../../../shared/components';

import { getHeight } from '../../../utils/helpers';

function OrdersList({ data, status, themedStyle }) {
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

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Orders!'}/>
  );

  return (
    <Fragment>
      { data && <FlatList
        data={data}
        extraData={data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        ListEmptyComponent={renderListEmptyComponent}
        maxToRenderPerBatch={5}
        showsVerticalScrollIndicator={false}
        style={themedStyle.containerStyle}
        contentContainerStyle={themedStyle.contentContainerStyle}
      /> }
      { !data && <LoadingView /> }
    </Fragment>
  );
}

export default withStyles(memo(OrdersList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));