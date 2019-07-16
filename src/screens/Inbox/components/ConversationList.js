import React, { PureComponent } from 'react';

import { View } from 'react-native';

import {
  List
} from 'react-native-ui-kitten';

import Conversation from './Conversation';
import { Block } from '../../../shared/components';

class ConversationList extends PureComponent {

  render() {
    return (
      <Block marginTop style={{ backgroundColor: '#ffffff' }}>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </Block>
    );
  }

}

export default ConversationList;
