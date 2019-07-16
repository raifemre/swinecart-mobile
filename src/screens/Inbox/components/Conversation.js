import React, { PureComponent } from 'react';

import {
  Text
} from 'react-native-ui-kitten'

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { 
  Block
} from '../../../shared/components';

class Conversation extends PureComponent {

  render() {
    return (
      <Block flex={1} row center padding>
        <Block marginRight flex='disabled'>
          <Text>Hello</Text>
        </Block>
        <Block row right>
          <Text>Hello</Text>
        </Block>
      </Block>
    );
  }

}

export default withStyles(Conversation,  () => ({
  container: {

  }
}));