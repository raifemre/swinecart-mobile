import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
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

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.MessageStore.getThreads();
      this.setState({ refreshing: false });
    });
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    const { MessageStore } = this.props;
    return (
      <FlatList
        data={MessageStore.threads}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        keyExtractor={item => `${item.id}`}
        initialNumToRender={8}
      />
    );
  }
}


export default Messages;