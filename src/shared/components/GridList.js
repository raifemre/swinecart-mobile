import React, { Fragment, memo } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../constants/theme';

import EmptyListMessage from './EmptyListMessage';
import LoadingView from './LoadingView';
import ListFooter from './ListFooter';

function GridList(props) {

  const { 
    themedStyle, Component, emptyListMessage, data, isLoading, isRefreshing, onEndReached
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
        {(data && data.length > 0) && <ListFooter isRefreshing={isRefreshing} />}
      </Fragment>
    );
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else {
    return (
      <FlatGrid
        items={data}
        itemDimension={150}
        spacing={8}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
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

export default withStyles(memo(GridList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));