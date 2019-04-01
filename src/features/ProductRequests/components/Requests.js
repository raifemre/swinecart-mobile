import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import LoadingView from '../../../shared/LoadingView';

import Request from './Request';

@inject('InventoryStore')
@observer
class Requests extends Component {

  state = {
    refreshing: false
  }

  renderRequest = ({ item }) => {
    return (
      <Request request={item} />
    );
  }

  render() {

    const { InventoryStore } = this.props;

    if (InventoryStore.requests) {
      return (
        <FlatList
          data={InventoryStore.requests}
          renderItem={this.renderRequest}
          keyExtractor={request => `${request.customer_id}`}
          refreshing={this.state.refreshing}
          onEndReachedThreshold={0.5}
        />
      );
    }
    else {
      return (
        <LoadingView />
      );
    }
  }
}

export default Requests;