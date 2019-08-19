
import React, { Fragment, useState } from 'react';
import { Button } from 'react-native-ui-kitten';
import AsyncStorage from '@react-native-community/async-storage';

import { withStyles } from 'react-native-ui-kitten/theme';

import { textStyles, colors, sizes } from '../../../constants/theme';

import {
  Block, Input
} from '../../../shared/components';

import {
  NavigationService, AuthService
} from '../../../services';

function Form(props) {

  const [email, setEmail] = useState('jordi11@luettgen.net');
  const [password, setPassword] = useState('secret12');

  const { themedStyle } = props;

  const onPressLogin = async () => {
    const data = {
      email, password
    };

    const response = await AuthService.login(data);
    if (response.data) {
      const { data: { access_token: token } }  = response.data;
      await AsyncStorage.setItem('token', token);
    }

    NavigationService.navigate('Breeder');
  }

  return (
    <Fragment>
      <Block middle flex='disabled' style={themedStyle.formContainer}>
        <Input label='EMAIL' value={email} onChangeText={setEmail} />
        <Input label='PASSWORD' value={password} onChangeText={setPassword} secureTextEntry={true} />
        {/* <Block row right flex='disabled' marginBottom>
          <Button
            textStyle={themedStyle.forgotPassword}
            size='small'
            appearance='ghost'
          >
              Forgot Password?
          </Button>
        </Block> */}
      </Block>
      <Block middle flex='disabled'>
        <Button
          textStyle={themedStyle.buttonText}
          size='large'
          style={themedStyle.button}
          onPress={onPressLogin}
        >
            LOGIN
        </Button>
      </Block>
    </Fragment>
  );
}

export default withStyles(Form, () => ({
  container: {
    flex: 1
  },
  formContainer: {
    marginBottom: sizes.margin
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