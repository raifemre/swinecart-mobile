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

  handleOnRefresh = () => { 
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    const { NotificationStore } = this.props;
    return (
      <FlatList
        data={NotificationStore.notifications.slice()}
        extraData={NotificationStore.notifications}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}


export default Notifications;