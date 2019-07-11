import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import Farm from './Farm';
import { toJS } from 'mobx';
@inject('FarmStore')
@observer
class Farms extends Component {

  state = {
    refreshing: false
  }

  renderItem({ item }) {
    return (
      <Farm farm={item}/>
    );
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.FarmStore.getFarms();
      this.setState({ refreshing: false });
    });
  };

  render() {

    return (
      <FlatList
        data={toJS(this.props.FarmStore.farms)}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        keyExtractor={item => `${item.id}`}
        initialNumToRender={8}
      />
    );
  }

}

export default Farms;