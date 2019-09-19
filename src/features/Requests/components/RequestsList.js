import React, { useEffect, memo } from 'react';
import { withNavigation } from 'react-navigation';
import { useStoreActions, useStoreState } from 'easy-peasy';
import RequestItem from './RequestItem';

import { List, LoadingView } from 'shared/components';

function RequestsList({ navigation }) {
  
  const id = navigation.getParam('productId');

  useEffect(() => {
    getRequests({ id });
  }, [ id ]);

  const getRequests = useStoreActions(
    actions => actions.orderRequests.getRequests
  );

  const getMoreRequests = useStoreActions(
    actions => actions.orderRequests.getMoreRequests
  );

  const requests = useStoreState(state => state.orderRequests.requests);

  const isRefreshing = useStoreState(state => state.orderRequests.isRefreshing);

  const isLoadingMore = useStoreState(state => state.orderRequests.isLoadingMore);

  const isLoading = useStoreState(state => state.orderRequests.isLoading);

  const keyExtractor = item => `${item.customerId}`;

  const onPressLoadMore = () => {
    getMoreRequests({ id });
  };

  const onRefresh = () => {
    getRequests({ id });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }

  else if (!isLoading && requests) {
    return (
      <List
        data={requests}
        Component={RequestItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Requests!'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
}

export default withNavigation(memo(RequestsList));