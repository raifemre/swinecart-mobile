import React, { Component } from 'react';

import {
  observer, inject
} from 'mobx-react'

import { View, Text } from 'native-base';

@inject('MessageStore')
@observer
class ConnectedIndicator extends Component {

  state = {
    visible: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 3000);
  }

  render() {
    if(this.state.visible) {
      return (
        <View style={{ backgroundColor: '#00af66', height: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'OpenSans-SemiBold' }}>
            Connected!
              </Text>
        </View>
      )
    }
    else return null;
  }
}

export default ConnectedIndicator;