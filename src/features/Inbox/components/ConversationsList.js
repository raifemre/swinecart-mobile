import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import Conversation from './Conversation';

import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';


function ConversationsList({ themedStyle }) {

  const [conversations, setConversation] = useState(null);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {

  }, []);

  const renderItem = ({ item }) => {
    return (
      <Conversation
        data={item}
      />
    );
  };

  const keyExtractor = item => item.user.userId;
  const getItemLayout = (data, index) => ({
    length: 80,
    offset: 80 * index,
    index
  });

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Conversations!'} />
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
      {conversations && <FlatList
        data={conversations}
        extraData={conversations}
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
      {!conversations && <LoadingView />}
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
}));