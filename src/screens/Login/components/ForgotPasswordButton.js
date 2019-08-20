
import React, { Fragment, memo } from 'react';
import { Button } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import { textStyles, colors } from '../../../constants/theme';
import { Block } from '../../../shared/components';

function ForgotPasswordButton() {
  const onPressForgot = () => {

  }

  return (
    <Fragment>
      <Block row right flex='disabled' marginBottom>
        <Button
          textStyle={themedStyle.forgotPassword}
          size='small'
          appearance='ghost'
          onPress={onPressForgot}
        >
          Forgot Password?
      </Button>
      </Block>
    </Fragment>
  );
}

export default withStyles(memo(ForgotPasswordButton, () => true), () => ({
  forgotPassword: {
    borderWidth: 0,
    ...textStyles.button,
    color: colors.gray5
  },
}));