import React, { Component } from 'react';

import {
  observer, inject
} from 'mobx-react'

import { View, Text } from 'native-base';

import ConnectedIndicator from './ConnectedIndicator';

@inject('MessageStore')
@observer
class StatusIndicator extends Component {

  state = {
    visible: true
  }

  render() {
    if(!this.props.MessageStore.socket) {
      return (
        <View style={{ backgroundColor: '#F1E05A', height: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'OpenSans-SemiBold' }}>
            Connecting...
          </Text>
        </View>
      );
    }
    else {
      return (
        <ConnectedIndicator />
      );
    }
  }
}

export default StatusIndicator;