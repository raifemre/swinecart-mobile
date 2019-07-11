import React from 'react';
import { Button } from 'react-native-ui-kitten';

import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles, colors } from '../../constants/theme';

import {
  Block, Input
} from '../../shared/components';

function Container(props) {

  const { themedStyle } = props;

  return (
    <Block middle padding flex={1}>
      <Block middle flex='disabled'>
        <Input label='EMAIL' />
        <Input label='PASSWORD' />
        <Block row right flex='disabled' marginBottom>
          <Button
            textStyle={[textStyles.button, themedStyle.forgotPassword]}
            size='small'
            appearance='ghost'
          >
            Forgot Password?
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
  forgotPassword: {
    color: colors.gray1
  }
}));