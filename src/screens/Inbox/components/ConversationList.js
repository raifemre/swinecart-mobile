import React, { PureComponent } from 'react';

import { View } from 'react-native';

import {
  List
} from 'react-native-ui-kitten';

import Conversation from './Conversation';
import { Block, ContainerView } from '../../../shared/components';

class ConversationList extends PureComponent {

  render() {
    return (
      <View style={{ backgroundColor: '#ffffff' }}>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </View>
    );
  }

}

export default ConversationList;
