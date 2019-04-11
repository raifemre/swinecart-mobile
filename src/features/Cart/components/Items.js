import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import LoadingView from '../../../shared/LoadingView';

@inject('SwineCartStore')
@observer
class Items extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    const { CardComponent } = this.props;
    return <CardComponent item={item} />     
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.SwineCartStore.getItems(this.props.status);
      this.setState({ refreshing: false });
    });
  };

  onEndReached = () => {
    // this.props.SwineCartStore.getMoreItems(this.props.status);
  }

  render() {

    const { SwineCartStore, status } = this.props;
    if (SwineCartStore.items[status]) {
      return (
        <FlatGrid
          itemDimension={150}
          spacing={5}
          items={SwineCartStore.items[status]}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          initialNumToRender={8}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.3}
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

export default Items;