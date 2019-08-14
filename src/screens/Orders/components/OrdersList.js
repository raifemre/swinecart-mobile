import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { colors } from '../../../constants/theme'

import OrderItem from './OrderItem';
import StatusPicker from './StatusPicker';

import { 
  EmptyListMessage, LoadingView, ListFooter, Block 
} from '../../../shared/components';

import { getHeight } from '../../../utils/helpers';
import { createRandomOrders } from '../../../utils/mockdata';

function OrdersList({ themedStyle }) {

  const [orders, setOrders] = useState({});
  const [status, setStatus] = useState('requested');
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);


  useEffect(() => {
    if (!orders[status]) {
      const fakeOrders = createRandomOrders(1000, status);
      setOrders({ ...orders, [status]: fakeOrders }); 
    }
  }, [ status ]);

  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => item.id;
  const getItemLayout = (data, index) => {
    const { status } = data[index];
    return {
      length: getHeight(status),
      offset: getHeight(status) * index,
      index
    };
  };

  const renderListEmptyComponent = () => (
    <EmptyListMessage message={'No Orders!'} />
  );
  
  const renderFooterComponent = () => {
    return (
      <ListFooter isRefreshing={isRefreshing} />
    )
  };

  const onEndReached = () => {

  };

  const contentContainerStyle = [
    themedStyle.contentContainerStyle,
    {
      display: status === 'requested' ? 'flex' : 'none',
    }
  ];

  return (
    <Fragment>
      <StatusPicker status={status} setStatus={setStatus} />
      <Fragment>
        { orders['requested'] && <FlatList
          data={orders['requested']}
          extraData={orders['requested']}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
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
          contentContainerStyle={contentContainerStyle}
        />}
        {!orders['requested'] && <LoadingView />}
      </Fragment>
    </Fragment>
  );
}

export default withStyles(memo(OrdersList), () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  ListFooterStyle: {
  }
}));