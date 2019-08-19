import React, { memo } from 'react';

import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles, colors } from '../../constants/theme';

import { Block } from '../../shared/components';

import { Form } from './components';

function Container(props) {
  return (
    <Block middle padding flex={1}>
      <Form />
    </Block>
  );
}

export default withStyles(memo(Container), () => ({
  container: {
    flex: 1
  },
  forgotPassword: {
    ...textStyles.button,
    color: colors.gray5
  },
  buttonText: {
    ...textStyles.button,
  },
  button: {
    borderWidth: 0
  }
}));