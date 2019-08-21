
import React, { Fragment, memo } from 'react';
import { Button } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles } from '../../../constants/theme';
import { Block } from '../../../shared/components';

function LoginButton({ themedStyle, onPress }) {
  return (
    <Fragment>
      <Block flex='disabled' marginVertical middle>
        <Button
          textStyle={themedStyle.loginButtonText}
          size='large'
          style={themedStyle.loginButton}
          onPress={onPress}
        >
          Login
        </Button>
      </Block>
    </Fragment>
  );
}

export default withStyles(memo(LoginButton, () => true), () => ({
  loginButtonText: {
    ...textStyles.button,
  },
  loginButton: {
    borderWidth: 0
  }
}));