import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList } from 'react-native';

import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import Notification from './Notification';

import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';

import { createNotifications } from '../../../utils/mockdata';

function NotificationList({ themedStyle }) {

  const [conversations, setConversation] = useState(null);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fakeConversations = createNotifications(500);
    setConversation(fakeConversations);
  }, []);

  const renderItem = ({ item }) => {
    return (
      // null
      <Notification
        data={item}
      />
    );
  };

  const keyExtractor = item => item.id;
  const getItemLayout = (data, index) => ({
    length: 80,
    offset: 80 * index,
    index
  });

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Notifications!'} />
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

export default withStyles(memo(NotificationList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
}));