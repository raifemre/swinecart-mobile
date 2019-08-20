import React, { Fragment, useState, memo, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { colors } from '../../../constants/theme'

import OrderItem from './OrderItem';
import { EmptyListMessage, LoadingView, ListFooter } from '../../../shared/components';

import { getHeight } from '../../../utils/helpers';

import { fetchOrders } from '../../../redux/actions';

import { 
  OrderService
} from '../../../services';

function OrdersListComponent({ themedStyle, status }) {

  const [orders, setOrders] = useState(null);
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    OrderService
      .getOrders(status)
      .then(data => {
        console.log('data', data);
      });
  }, [ ]);

  const renderItem = ({ item }) => {
    return (
      <OrderItem
        data={item}
      />
    );
  };

  const keyExtractor = item => `${item.id}`; 
  const getItemLayout = (data, index) => {
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

  const onRefresh = () => {
    OrderService
      .getOrders(status)
      .then(response => {
        if (response && response.data && response.data.products) {
          setRefreshing(false);
          const products = response.data.products;
          setOrders(products);
        }
      });
  };

  return (
    <Fragment>
      {orders && <FlatList
        data={orders}
        extraData={orders}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
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
      />}
      {!orders && <LoadingView />}
    </Fragment>
  );
}

const mapStateToProps = (state, props) => {
  return {
    // orders: state.orders[props.status].ids,/
    // orders: state.orders[props.status].entities,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    getOrders: fetchOrders
  }, dispatch);
};


// const OrdersList = connect(mapStateToProps, mapDispatchToProps)(memo(OrdersListComponent));

export default withStyles(OrdersListComponent, () => ({
  containerStyle: {
    backgroundColor: colors.gray2,
  },
  contentContainerStyle: {
    flexGrow: 1
  }
}));