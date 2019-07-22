import React, { useState } from 'react';
import { Button } from 'react-native-ui-kitten';

import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles, colors } from '../../constants/theme';

import {
  Block, Input
} from '../../shared/components';

import NavigationService from '../../services/navigation';

function Container(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { themedStyle } = props;

  const onPressLogin = () => {
    NavigationService.navigate('Breeder');
  }

  return (
    <Block middle padding flex={1}>
      <Block middle flex='disabled'>
        <Input label='EMAIL' value={email} onChangeText={setEmail} />
        <Input label='PASSWORD' value={password} onChangeText={setPassword} secureTextEntry={true} />
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
          onPress={onPressLogin}
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