import React, { Component } from 'react';
import { Item, Input, Button } from 'native-base';
import { observer } from 'mobx-react';

import IconWrapper from './IconWrapper';

@observer
class PasswordField extends Component {

  state = {
    showPassword: false
  }

  onChangeText = value => {
    const { form, field } = this.props;
    form.setValue(field, value);
  }

  togglePassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  }

  render() {
    const { form, placeholder, field } = this.props;
    const { showPassword } = this.state;

    return (
      <Item>
        <Input
          placeholder={placeholder}
          value={form.form[field]}
          onChangeText={this.onChangeText}
          secureTextEntry={!showPassword}
          style={{ fontFamily: 'OpenSans-SemiBold' }}
        />
        <Button transparent onPress={this.togglePassword}>
          <IconWrapper style={{ color: '#000000' }} name={!showPassword ? 'eye' : 'eye-off'} type='MaterialCommunityIcons' />
        </Button>
      </Item>
    );
  }
}

export default PasswordField;