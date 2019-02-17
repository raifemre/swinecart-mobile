import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import Item from './Item';
import RequestedItem from './RequestedItem';

@inject('SwineCartStore')
@observer
class Items extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    if(item.request_status === 1) {
      return (
        <RequestedItem item={item} />
      );
    }
    else {
      return (
        <Item item={item} />
      );
    }
    
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      this.setState({ refreshing: false });
    });
  };

  handleOnEndReached = () => {
  }

  render() {

    return (
      <FlatGrid
        itemDimension={130}
        spacing={16}
        items={this.props.SwineCartStore.items}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        initialNumToRender={6}
        onEndReached={this.handleOnEndReached}
        onEndReachedThreshold={0.3}
      />
    );
  }
}

export default Items;