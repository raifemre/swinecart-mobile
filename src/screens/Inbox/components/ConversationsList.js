import React, { Fragment, useState, memo } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import Conversation from './Conversation';

import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';

import { getHeight } from '../../../utils/helpers';

function ConversationsList({ data, status, themedStyle }) {

  const [isRefreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Conversation
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
    <EmptyListMessage message={'No Conversations...'} />
  );

  const renderFooterComponent = () => {
    return (
      <ListFooter isRefreshing={isRefreshing} />
    )
  };

  const onEndReached = () => {
    console.log('End Reached!');
  };

  return (
    <Fragment>
      {data && <FlatList
        data={data}
        extraData={data}
        renderItem={renderItem}
        // getItemLayout={getItemLayout}
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
      {!data && <LoadingView />}
    </Fragment>
  );
}

export default withStyles(memo(ConversationsList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  ListFooterStyle: {
  }
}));