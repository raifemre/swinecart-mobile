import React, { Fragment, useState, memo } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import RequestItem from './RequestItem';

import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';

function RequestsList({ requests, themedStyle }) {

  const [isRefreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <RequestItem
        data={item}
      />
    );
  };

  const keyExtractor = item => `${item.customer_id}`;
  const getItemLayout = (data, index) => ({
    length: 120,
    offset: 120 * index,
    index
  });

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Requests!'} />
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
      {requests && <FlatList
        data={requests}
        extraData={requests}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        ListEmptyComponent={renderListEmptyComponent}
        ListFooterComponent={renderFooterComponent}
        ListFooterComponentStyle={themedStyle.ListFooterStyle}
        showsVerticalScrollIndicator={false}
        style={themedStyle.containerStyle}
        contentContainerStyle={themedStyle.contentContainerStyle}
      />}
      {!requests && <LoadingView />}
    </Fragment>
  );
}

export default withStyles(memo(RequestsList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  ListFooterStyle: {
  }
}));