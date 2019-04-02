import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer } from 'mobx-react';

@observer
class FlatGridWrapper extends Component {

  state = {
    refreshing: false,
  }

  onRefresh = () => {
    const { onRefresh } = this.props;
    this.setState({
      refreshing: true
    }, async () => {
      await onRefresh();
      this.setState({ refreshing: false });
    });
  }

  render() {

    const { items, onEndReached, renderItem } = this.props;

    return (
      <FlatGrid
        itemDimension={150}
        spacing={8}
        items={items}
        renderItem={renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={4}
        initialNumToRender={8}
      />
    );
  }
}

export default FlatGridWrapper;