import React from 'react';
import { Button } from 'react-native-ui-kitten';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

import { textStyles } from '../../constants/theme';

import { 
  Block, Input
} from '../../shared/components/';

function Container(props) {

  const { themedStyle } = props;

  return (
    <Block middle padding flex={1}>
      <Block center middle flex='disabled'>
        <Input />
        <Input />
        <Block row>
          <Button
          textStyle={textStyles.button}
          size='large'
          appearance='ghost'
        >
          LOGIN
        </Button>
        </Block>
      </Block>
      <Block middle flex='disabled'>
        <Button
          textStyle={textStyles.button}
          size='large'
        >
          LOGIN
        </Button>
      </Block>
    </Block>
  );
}

export default withStyles(Container, () => ({
  container: {
    flex: 1
  }, 
}));