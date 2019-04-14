import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import LoadingView from '../../../shared/LoadingView';

import Thread from './Thread';

@inject('MessageStore')
@observer
class Messages extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    return <Thread thread={item} />;
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.MessageStore.getThreads();
      this.setState({ refreshing: false });
    });
  };

  render() {

    if (this.props.MessageStore.threads) {
      return (
        <FlatList
          data={this.props.MessageStore.threads}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          keyExtractor={item => `${item.id}`}
          initialNumToRender={8}
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


export default Messages;