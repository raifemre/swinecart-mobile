import React, { Fragment, memo } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../constants/theme';

import EmptyListMessage from './EmptyListMessage';
import LoadingView from './LoadingView';
import ListFooter from './ListFooter';

function List(props) {

  const {
    themedStyle, Component, keyExtractor, emptyListMessage, isRefreshing, 
    isLoadingMore, onPressLoadMore, onRefresh, isLoading, data
  } = props;

  const renderItem = ({ item }) => {
    return (
      <Component
        data={item}
      />
    );
  };

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={emptyListMessage} />
  );

  const renderFooterComponent = () => {
    return (
      <Fragment>
        {data.length > 0 && <ListFooter isLoadingMore={isLoadingMore} onPressLoadMore={onPressLoadMore} />}
      </Fragment>
    )
  };

  if (isLoading || !data) {
    return <LoadingView />;
  }
  else {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
      />
    );
  }
}

export default withStyles(memo(List), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  ListFooterStyle: {
  }
}));