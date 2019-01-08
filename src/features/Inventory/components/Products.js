import React, { Component } from 'react';

import { SectionList, StyleSheet } from 'react-native';

import { View, Text } from 'native-base';

import { observer, inject } from 'mobx-react';

import { toJS } from 'mobx';

import RequestedCard from './RequestedCard';
import ReservedCard from './ReservedCard';
import OnDeliveryCard from './OnDeliveryCard';

@inject('DashboardStore', 'UserStore')
@observer
class Products extends Component {

  componentDidMount() {
  }

  state = {
    refreshing: false
  }

  renderProduct = ({ item }) => {
    const { status } = item;
    switch(status) {
      case 'requested'    : return <RequestedCard product={item} />;
      case 'reserved'     : return <ReservedCard product={item} />;
      case 'on_delivery'  : return <OnDeliveryCard product={item} />;
      default: return null;
    }
  }

  renderSectionHeader = ({ section: { title } }) => (
    <View style={[styles.container, { backgroundColor: '#000000', }]}>
      <Text style={[styles.openSansBold, { fontSize: 19, color: '#FFFFFF' }]}>{title}</Text>
    </View>
  )

  handleOnRefresh = () => {
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    const { DashboardStore } = this.props;
    const products = toJS(DashboardStore.products).reduce((a, e) => {
      switch (e.status) {
        case 'requested'   : a[0].data.push(e); break;
        case 'reserved'    : a[1].data.push(e); break;
        case 'on_delivery' : a[2].data.push(e); break;
        case 'sold' : a[3].data.push(e); break;
      }
      return a;
    }, [
      { title: 'Requested', data: []},
      { title: 'Reserved', data: []},
      { title: 'On Delivery', data: []},
      { title: 'Sold', data: []},
    ]);

    return (
      <SectionList
        sections={products}
        renderItem={this.renderProduct}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default Products;