import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import Notification from './Notification';
import { toJS } from 'mobx';

@inject('NotificationStore')
@observer
class Notifications extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    return <Notification notification={item}/>;
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
        await this.props.NotificationStore.getNotifications();
      this.setState({ refreshing: false });
    });
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    return (
      <FlatList
        data={toJS(this.props.NotificationStore.notifications)}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        initialNumToRender={8}
      />
    );
  }
}


export default Notifications;