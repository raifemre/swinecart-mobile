import React, { Component } from 'react';

import { FlatList } from 'react-native';

import { observer, inject } from 'mobx-react';

import { toJS } from 'mobx';

import Request from './Request';

@inject('DashboardStore', 'UserStore')
@observer
class Requests extends Component {

  componentDidMount() {
  }

  state = {
    refreshing: false
  }

  renderRequest = ({ item }) => {
    return (
      <Request request={item}/>
    );
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.DashboardStore.getProductRequests();
      this.setState({ refreshing: false });
    });
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    const { DashboardStore } = this.props;
    const productRequests = toJS(DashboardStore.productRequests);

    return (
      <FlatList
        data={productRequests}
        renderItem={this.renderRequest}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default Requests;