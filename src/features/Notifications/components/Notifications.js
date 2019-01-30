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

    return (
      <FlatList
        data={this.props.NotificationStore.notifications}
        extraData={this.props}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={8}
      />
    );
  }
}


export default Notifications;